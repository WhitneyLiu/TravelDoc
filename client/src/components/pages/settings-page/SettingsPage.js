import React from "react";
import Layout from "../../sharable-components/Layout";
import ClearSignedFiles from "./components/ClearSignedFiles";
import DeleteAccount from "./components/DeleteAccount";

export default function SettingsPage() {
  return (
    <Layout>
      <div className=" fixed left-1/4 top-0 mt-16 ml-[-60px] w-full md:w-3/4">
        <div className="flex flex-col items-start">
          <span className="text-slate-900 text-l">Manage Your Completed Documents and Accounts Here.</span>
          <div className=" w-4/5 mt-10">
            <ClearSignedFiles />
            <DeleteAccount />
         </div>
        </div>
      </div>
    </Layout>
  );
}
