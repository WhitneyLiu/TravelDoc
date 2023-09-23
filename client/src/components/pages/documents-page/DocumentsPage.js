import AppContainer from "../../sharable-components/AppContainer";
import PdfContainer from "./components/PdfContainer";
import PdfViewer from "./components/PdfViewer";
import { useState } from "react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPdfFilesByStatus } from "../../../redux/reducer/pdfReducer";

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

export default function DocumentsPage() {
  const [selectedPdf, setSelectedPdf] = useState(null);
  const dispatch = useDispatch();
  const { completedPdfList, isLoading, error } = useSelector(
    (state) => state.pdf
  );

  useEffect(() => {
    dispatch(fetchPdfFilesByStatus("complete"));
  }, [dispatch]);

  const handlePdfClick = (pdfUrl) => {
    setSelectedPdf(pdfUrl);
  };

  return (
    <AppContainer>
      <div className="sm:px-0">
        <h3 className="text-2xl font-semibold leading-7 text-gray-900 mb-4">
          Documents
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          Here's all the docs you have signed
        </p>
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : selectedPdf ? (
        <PdfViewer pdfUrl={selectedPdf} />
      ) : (
        <PdfContainer pdfFiles={completedPdfList} onPdfClick={handlePdfClick} />
      )}
    </AppContainer>
  );
}
