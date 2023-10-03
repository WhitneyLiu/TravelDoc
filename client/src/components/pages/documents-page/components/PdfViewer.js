import Button from "../../../sharable-components/Button";

function PdfViewer({ iframeSrc1, setIframeSrc1, iframeSrc2 }) {
	return (
		<>
			<div className={`flex justify-end ${iframeSrc2 && "mt-10"}`}>
				<Button
					onClick={() => setIframeSrc1("")}
					className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
					Return
				</Button>
			</div>
			<div
				className={`relative block w-full h-[800px] rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
					iframeSrc2 === "" ? "mt-20" : "mt-10"
				} flex`}>
				<iframe
					src={iframeSrc1}
					className="w-full h-full border border-gray-300 rounded-md shadow-md"
					title="Embedded Content"
				/>
				{iframeSrc2 && (
					<iframe
						src={iframeSrc2}
						className="w-full h-full border border-gray-300 rounded-md shadow-md"
						title="Embedded Content"
					/>
				)}
			</div>
		</>
	);
}

export default PdfViewer;
