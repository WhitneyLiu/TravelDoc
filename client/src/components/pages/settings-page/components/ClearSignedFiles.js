import Button from "../../../sharable-components/Button";

export default function ClearSignedFiles() {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-slate-900 font-bold text-xl">
        Clear ALL signed documents
      </h2>
      <Button className="mr-4  bg-red-500 hover:bg-red-400 rounded-md py-px px-8 text-xl w-1/6">
        Clear
      </Button>
    </div>
  );
}
