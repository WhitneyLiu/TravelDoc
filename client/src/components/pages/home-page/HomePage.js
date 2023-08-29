import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../redux/reducer/authenticationReducer";
import HomepageHeader from "./components/HomepageHeader";
import Greeting from "./components/Greeting";
import { useSelector } from "react-redux";
import Sidebar from "./components/Sidebar";

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector((state) => state.user.userName);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      <HomepageHeader onLogout={handleLogout} />
      <Sidebar />
      <Greeting userName={userName} />

    </>
  );
}
