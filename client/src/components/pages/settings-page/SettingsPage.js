import AppContainer from "../../sharable-components/AppContainer";
import { open } from "../../../redux/reducer/modalReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function SettingsPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const openDeleteAccountModal = () => {
    dispatch(
      open({
        confiemButton: "Deactivate account",
        title: "Deactivate account",
        message:
          "Are you sure you want to deactivate your account? All of your data will be permanently removed from our servers forever. This action cannot be undone.",
        action: deleteAccount,
      })
    );
  };

  const deleteAccount = () => {
    console.log("Account deleted");
    navigate("/");
  };

  const openClearDocumentsModal = () => {
    dispatch(
      open({
        confiemButton: "Clear documents",
        title: "Clear documents",
        message:
          "Are you sure you want to clear all signed documents? All of your data will be permanently removed from our servers forever. This action cannot be undone.",
        action: clearDocuments,
      })
    );
  };

  const clearDocuments = () => {
    console.log("Documents cleared");
  };

  return (
    <>
      <AppContainer>
        <div className="sm:px-0 mb-8">
          <h3 className="text-2xl font-semibold leading-7 text-gray-900 mb-4">
            Settings
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            Manage Your Completed Documents and Accounts Here.
          </p>
        </div>
        <div className="border-t border-gray-100 mb-8"></div>
        <div className="divide-y divide-white/5 mb-8">
          <div className="grid max-w-7xl grid-cols-1 md:grid-cols-3">
            <div>
              <h2 className="text-base font-semibold leading-7 text-black">
                Clear ALL signed documents
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Want to clear all signed documents? You can do so here. This
                action is not reversible. All information related to this
                account will be deleted permanently.
              </p>
            </div>

            <div className="flex items-start justify-end md:col-span-2">
              <button
                className="bg-transparent hover:bg-red-600 text-red-600 font-semibold hover:text-white py-2 px-4 border border-red-600 hover:border-transparent rounded"
                onClick={openClearDocumentsModal}
              >
                Yes, clear all signed documents
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-100 mb-8"></div>
        <div className="divide-y divide-white/5">
          <div className="grid max-w-7xl grid-cols-1 md:grid-cols-3">
            <div>
              <h2 className="text-base font-semibold leading-7 text-black">
                Delete account
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                No longer want to use our service? You can delete your account
                here. This action is not reversible. All information related to
                this account will be deleted permanently.
              </p>
            </div>

            <div className="flex items-start justify-end md:col-span-2">
              <button
                className="bg-transparent hover:bg-red-600 text-red-600 font-semibold hover:text-white py-2 px-4 border border-red-600 hover:border-transparent rounded"
                onClick={openDeleteAccountModal}
              >
                Yes, delete my account
              </button>
            </div>
          </div>
        </div>
      </AppContainer>
    </>
  );
}
