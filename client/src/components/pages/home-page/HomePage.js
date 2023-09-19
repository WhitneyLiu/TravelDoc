import AppContainer from "../../sharable-components/AppContainer";
import PdfSelector from "./components/PdfSelector";
import { useEffect, useState } from "react";

const stats = [
  { name: "Action Required", stat: "15" },
  { name: "Completed", stat: "120" },
  { name: "Expiring", stat: "5" },
];
// Mock data for PDFs
const mockPdfList = [
  { name: "File1.pdf" },
  { name: "File2.pdf" },
  { name: "File3.pdf" },
];

export default function HomePage() {
  const [pdfList, setPdfList] = useState([]);

  useEffect(() => {
    // Simulate fetching PDFs from our backend
    setPdfList(mockPdfList);
  }, []);

  return (
    <AppContainer>
      <div className="sm:px-0">
        <h3 className="text-2xl font-semibold leading-7 text-gray-900 mb-8">
          Home
        </h3>
        <div>
          <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((item) => (
              <div
                key={item.name}
                className="overflow-hidden rounded-lg bg-blue-600 px-4 py-5 shadow sm:p-6 flex flex-col items-start"
              >
                <dd className="mt-1 text-3xl font-semibold tracking-tight text-white text-left">
                  {item.stat}
                </dd>
                <dt className="truncate text-sm font-medium text-white text-left">
                  {item.name}
                </dt>
              </div>
            ))}
          </dl>
        </div>
        <PdfSelector pdfList={mockPdfList} />
      </div>
    </AppContainer>
  );
}
