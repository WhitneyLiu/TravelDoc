import Button from "../../../sharable-components/Button";

export default function ClearSignedFiles() {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-xl font-semibold leading-7 text-gray-900">
        Clear ALL signed documents
      </h2>
      <Button className="rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm bg-red-500 hover:bg-red-400 w-1/12">
        Clear
      </Button>
    </div>
  );
}
