import Layout from "../../sharable-components/Layout";
import ProfileGreeting from "./components/ProfileGreeting";
import PersonalInfoForm from "./components/PersonalInfoForm";
import React, { useState } from "react";
import { setUserName, setUserAvatar } from "../../../redux/reducer/userReducer";
import { useDispatch } from "react-redux";


export default function ProfilePage() {
  const dispatch = useDispatch();
  const [newName, setNewName] = useState("");
  const [newAvatar, setNewAvatar] = useState("");

  const handleNameChange = () => {
    dispatch(setUserName(newName));
  };
  const handleAvatarChange = () => {
    dispatch(setUserAvatar(newAvatar));
  };

  return (
    <Layout>
      <ProfileGreeting />
      <PersonalInfoForm />
    </Layout>
  );
}
