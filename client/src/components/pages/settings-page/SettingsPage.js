import React from "react";
import Layout from "../../sharable-components/Layout";
import ClearSignedFiles from "./components/ClearSignedFiles";
import DeleteAccount from "./components/DeleteAccount";

export default function SettingsPage() {
  return (
    <Layout>
      <div className=" fixed left-1/4 top-0 mt-16 ml-[-60px] w-full md:w-3/4">
        <div className=" w-7/12 mt-20">
          <ClearSignedFiles />
          <DeleteAccount />
        </div>
      </div>
    </Layout>
  );
}
