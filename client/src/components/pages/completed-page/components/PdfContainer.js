import PdfLogo from "./PdfLogo";
import Button from "../../../sharable-components/Button";
import { useState } from "react";

export default function PdfContainer({ pdfFiles, onPdfClick }) {
  const [completedFiles, setCompletedFiles] = useState(pdfFiles);
  function sortByDate() {
    const sortedFiles = [...pdfFiles].sort(
      (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
    );
    console.log(sortedFiles);
    setCompletedFiles(sortedFiles);
  }
  return (
    <div>
      <div className=" flex justify-start items-start">
        <h4 className="text-slate-900 text-2xl font-bold pl-0">
          Here's all the docs you have signed
        </h4>
      </div>
      <div>
        <div className="flex justify-end">
          <Button onClick={sortByDate}>SortByDate</Button>
        </div>
        <div className=" mt-5 grid grid-cols-1 gap-14 sm:grid-cols-6">
          {completedFiles.map((pdf, index) => (
            <div key={index} onClick={() => onPdfClick(pdf.url)}>
              <div className="cursor-pointer w-20">
                <PdfLogo />
                <p className="text-slate-900 font-bold">{pdf.name}</p>
                <p className="text-slate-900 font-bold">{pdf.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
