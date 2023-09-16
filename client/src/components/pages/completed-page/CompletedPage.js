import React, { useState } from "react";
import PdfContainer from "./components/PdfContainer";
import PdfViewer from "./components/PdfViewer";
import Layout from "../../sharable-components/Layout";
export default function CompletedPage() {
  const [selectedPdf, setSelectedPdf] = useState(null);

  const mockPdfFiles = [
    { name: "Doc1", url: "#", timestamp: "2023/1/12" },
    { name: "Doc2", url: "#", timestamp: "2023/3/15" },
    { name: "Doc3", url: "#", timestamp: "2023/5/20" },
    { name: "Doc4", url: "#", timestamp: "2023/6/10" },
    { name: "Doc5", url: "#", timestamp: "2023/7/26" },
    { name: "Doc6", url: "#", timestamp: "2023/8/25" },
    { name: "Doc7", url: "#", timestamp: "2023/8/26" },
    { name: "Doc8", url: "#", timestamp: "2023/9/1" },
    // add more pdf info
  ];

  const handlePdfClick = (pdfUrl) => {
    setSelectedPdf(pdfUrl);
  };

  return (
    <Layout>

      <div className="relative md:fixed left-1/4 top-0 mt-16 ml-[-60px] w-full md:w-3/4 z-10  max-h-[90vh] overflow-y-auto pr-4">
        {selectedPdf ? (
          <PdfViewer pdfUrl={selectedPdf} />
        ) : (
          <PdfContainer pdfFiles={mockPdfFiles} onPdfClick={handlePdfClick} />
        )}
      </div>
    </Layout>
  );
}
