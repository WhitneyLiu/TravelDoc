import Button from "../../../sharable-components/Button";
export default function DeleteAccount() {
  return (
    <div className=" flex justify-between items-center mt-10">
      <h2 className="text-slate-900 font-bold text-xl">Delete Account</h2>
      <Button className="mr-4 bg-red-500 hover:bg-red-400 rounded-md py-px px-8 text-xl w-1/6 ">
        Delete
      </Button>
    </div>
  );
}
