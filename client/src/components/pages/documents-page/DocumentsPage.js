import AppContainer from "../../sharable-components/AppContainer";
import PdfContainer from "./components/PdfContainer";
import PdfViewer from "./components/PdfViewer";
import { useState } from "react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPdfFilesByStatus } from "../../../redux/reducer/pdfReducer";

export default function DocumentsPage() {
  const [selectedPdf, setSelectedPdf] = useState(null);
  const dispatch = useDispatch();
  const { pdfList, isLoading, error } = useSelector((state) => state.pdf);

  const completedFiles = pdfList.filter((item) => item.status === "complete");

  useEffect(() => {
    dispatch(fetchPdfFilesByStatus());
  }, [dispatch]);


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
        <PdfContainer pdfFiles={completedFiles} />
      )}
    </AppContainer>
  );
}
