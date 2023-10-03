import Button from "../../../sharable-components/Button";
import { useState } from "react";
import PdfBoxPagination from "../../home-page/components/PdfBoxPagination";
import { DocumentIcon } from "@heroicons/react/24/outline";

export default function PdfContainer({ pdfFiles, isLoading, setIframeSrc1 }) {
	const [isSorted, setIsSorted] = useState(false);
	const [completedFiles, setCompletedFiles] = useState(pdfFiles);
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 20;
	const totalPages = Math.ceil(completedFiles.length / itemsPerPage);
	const offset = (currentPage - 1) * itemsPerPage;
	const currentItems = completedFiles.slice(offset, offset + itemsPerPage);

	function SortByDate() {
		const sortedFiles = [...pdfFiles].sort(
			(a, b) => new Date(a.expiry_date) - new Date(b.expiry_date)
		);
		setCompletedFiles(sortedFiles);
		setIsSorted((s) => !s);
	}

	function SortByDefault() {
		setCompletedFiles(pdfFiles);
		setIsSorted((s) => !s);
	}

	function openDoc(pdf) {
		setIframeSrc1(pdf.url);
	}

	return (
		<div>
			<div>
				<div className="flex justify-end ">
					<Button
						onClick={!isSorted ? SortByDate : SortByDefault}
						className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
						{!isSorted ? "SortByDate" : "SortByDefault"}
					</Button>
				</div>

				{isLoading ? (
					<p>Loading...</p>
				) : currentItems.length === 0 ? (
					<div className="relative block w-full h-[800px] rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-20">
						<div className="absolute inset-0 flex items-center justify-center">
							<p>
								Oops...You don't have any completed files yet.
							</p>
						</div>
					</div>
				) : (
					<div className="relative block w-full h-[800px] rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-20">
						<div className="flex flex-wrap justify-start items-start">
							{currentItems.map((pdf, index) => (
								<div
									key={pdf.file_id || index}
									className="m-2  w-40 h-32 flex flex-col items-center justify-between"
									onDoubleClick={() => setIframeSrc1(pdf.url)}
									// onDoubleClick={() => window.open(pdf.url, "_blank")}
								>
									<DocumentIcon
										className="h-12 w-12 text-gray-400"
										aria-hidden="true"
									/>
									<span className="mt-2 block text-sm font-semibold text-gray-900">
										{pdf.url
											? pdf.url.split("/").pop()
											: "Unnamed File"}
									</span>
									<span className=" block text-sm font-semibold text-gray-900">
										{pdf.expiry_date}
									</span>
								</div>
							))}
						</div>
					</div>
				)}
			</div>
			<PdfBoxPagination
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
				totalPages={totalPages}
				offset={offset}
				currentItems={currentItems}
				pdfList={completedFiles}
			/>
		</div>
	);
}
