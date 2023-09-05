import { DocumentIcon } from "@heroicons/react/24/outline";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import PdfBoxModal from "./PdfBoxModal";
import React, { useState, useRef } from "react";

export default function PdfSelector({ pdfList }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(true);
  const itemsPerPage = 1; // Adjust this based on your design

  const totalPages = Math.ceil(pdfList.length / itemsPerPage);
  const offset = (currentPage - 1) * itemsPerPage;
  const currentItems = pdfList.slice(offset, offset + itemsPerPage);

  const cancelButtonRef = useRef(null);

  return (
    <div className="relative">
      <PdfBoxModal open={open} setOpen={setOpen}>
        <div className="relative block w-full h-[800px] rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-20">
          <div className="flex flex-wrap justify-start items-start">
            {currentItems.map((pdf, index) => (
              <div key={index} className="m-2">
                <DocumentIcon
                  className="h-12 w-12 text-gray-400"
                  aria-hidden="true"
                />
                <span className="mt-2 block text-sm font-semibold text-gray-900">
                  {pdf.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-gray-200 bg-transparent px-4 py-3 sm:px-6">
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">{offset + 1}</span> to{" "}
                <span className="font-medium">
                  {offset + currentItems.length}
                </span>{" "}
                of <span className="font-medium">{pdfList.length}</span> results
              </p>
            </div>
            <div>
              <nav
                className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                aria-label="Pagination"
              >
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Previous</span>
                  <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                  onClick={() =>
                    setCurrentPage(Math.min(totalPages, currentPage + 1))
                  }
                  className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Next</span>
                  <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </nav>
            </div>
          </div>
        </div>
      </PdfBoxModal>
    </div>
  );
}
