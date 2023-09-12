import Layout from "../../sharable-components/Layout";
import ProfileGreeting from "./components/ProfileGreeting";
import PersonalInfoForm from "./components/PersonalInfoForm";
import React from "react";



export default function ProfilePage() {

  return (
    <Layout>
      <ProfileGreeting />
      <PersonalInfoForm />
    </Layout>
  );
}
