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
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 100;

  const totalPages = Math.ceil(pdfList.length / itemsPerPage);
  const offset = (currentPage - 1) * itemsPerPage;
  const currentItems = pdfList.slice(offset, offset + itemsPerPage);

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
                        className="m-2"
                        onDoubleClick={() => window.open(pdf.url, "_blank")}
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
