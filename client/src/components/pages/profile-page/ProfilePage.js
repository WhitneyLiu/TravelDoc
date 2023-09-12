import Layout from "../../sharable-components/Layout";
import ProfileGreeting from "./components/ProfileGreeting";
import PersonalInfoForm from "./components/PersonalInfoForm";
import React from "react";

export default function ProfilePage() {
  return (
    <Layout>
      <div className="relative md:sticky left-1/4 top-0 mt-5 ml-[-125px] w-full md:w-1/4 z-10">
        <ProfileGreeting />
      </div>
      <div className="relative md:sticky left-1/4 top-0 mt-[90px] ml-[-125px] w-full md:w-3/4 z-10">
        <PersonalInfoForm />
      </div>
    </Layout>
  );
}
