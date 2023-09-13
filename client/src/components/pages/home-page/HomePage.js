import Layout from "../../sharable-components/Layout";
import PdfSelector from "./components/PdfSelector";
import React, { useState, useEffect } from "react";
import StatBox from "./components/StatsBox";

export default function Home() {
  // Mock data for PDFs
  const mockPdfList = [
    { name: "File1.pdf" },
    { name: "File2.pdf" },
    { name: "File3.pdf" },
  ];
  const [pdfList, setPdfList] = useState([]);
  useEffect(() => {
    // Simulate fetching PDFs from our backend
    setPdfList(mockPdfList);
  }, []);
  return (
    <Layout>
      <div className="relative md:fixed left-1/4 top-0 mt-16 ml-[-60px] w-full md:w-3/4 z-10  max-h-[90vh] overflow-y-auto pr-4">
        <StatBox />
        <PdfSelector pdfList={mockPdfList} />
      </div>
    </Layout>
  );
}
