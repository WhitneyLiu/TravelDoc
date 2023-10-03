import React, { useState } from "react";
import { DocumentIcon } from "@heroicons/react/24/outline";
import PdfBoxModal from "./PdfBoxModal";
import PdfBoxPagination from "./PdfBoxPagination";

export default function PdfSelector({
  pdfList,
  error,
  isLoading,
  isModalOpen,
  setModalOpen,
  setIframeSrc1,
  setIframeSrc2,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // Filter out 'Explanation' files
  const contractItems = pdfList.filter(
    (pdf) => pdf && pdf.url && !pdf.url.includes("Explanation")
  );

  const totalPages = Math.ceil(contractItems.length / itemsPerPage);
  const offset = (currentPage - 1) * itemsPerPage;
  const currentItems = contractItems.slice(offset, offset + itemsPerPage);

  return (
    <div>
      {error && <p className="text-red-500">{error}</p>}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {pdfList.length === 0 ? (
            <div className="relative block w-full h-[800px] rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-20">
              <div className="absolute inset-0 flex items-center justify-center">
                <p>No files available at the moment.</p>
              </div>
            </div>
          ) : (
            <>
              <div className="relative z-40">
                <PdfBoxModal
                  isOpen={isModalOpen}
                  onClose={() => setModalOpen(false)}
                />

                <div className="relative block w-full h-[800px] rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-20">
                  <div className="flex flex-wrap justify-start items-start">
                    {currentItems.map((pdf, index) => (
                      <div
                        key={pdf.file_id || index}
                        className="m-2  w-40 h-32 flex flex-col items-center justify-between"
                        onDoubleClick={() => {
                          if (!pdf || !pdf.url) {
                            console.error("Invalid PDF or URL");
                            return;
                          }
                          //console.log("PDF List:", pdfList);

                          // Set the URL for the left iframe to the selected PDF
                          setIframeSrc1(pdf.url);

                          // Extract the base name of the contract
                          const urlParts = pdf.url.split("/");
                          const fileName = urlParts[urlParts.length - 1];
                          const baseName = fileName.split("-")[0];
                          //console.log("Base name:", baseName);

                          // Find the corresponding 'Explanation' PDF
                          const explanationPdf = pdfList.find(
                            (item) =>
                              item &&
                              item.url &&
                              item.url.includes(`${baseName}Explanation`)
                          );

                          if (explanationPdf && explanationPdf.url) {
                            console.log(
                              "Setting explanation PDF:",
                              explanationPdf.url
                            );
                            setIframeSrc2(explanationPdf.url);
                          } else {
                            console.warn("Explanation PDF not found");
                            // If not found, set it to some default or leave it empty
                            setIframeSrc2("");
                          }
                        }}
                      >
                        <DocumentIcon
                          className="h-12 w-12 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="mt-2 block text-sm font-semibold text-gray-900">
                          {pdf.url ? pdf.url.split("/").pop() : "Unnamed File"}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <PdfBoxPagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPages={totalPages}
                offset={offset}
                currentItems={currentItems}
                pdfList={pdfList}
              />
            </>
          )}
        </>
      )}
    </div>
  );
}
