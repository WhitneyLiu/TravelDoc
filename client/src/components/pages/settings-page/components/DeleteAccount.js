import Button from "../../../sharable-components/Button";
import { useDispatch } from "react-redux";
// import { deleteUser } from "../../../../redux/reducer/authenticationReducer";

export default function DeleteAccount() {
  const dispatch = useDispatch();
  const handleDeleteUser = () => {
    // Dispatch the deleteUser action
    // dispatch(deleteUser());
  };
  return (
    <div className=" flex justify-between items-center mt-10">
      <h2 className=" text-xl font-semibold leading-7 text-gray-900">
        Delete Account
      </h2>
      <Button
        onClick={handleDeleteUser}
        className="rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm bg-red-500 hover:bg-red-400 w-1/12 "
      >
        Delete
      </Button>
    </div>
  );
}
