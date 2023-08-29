import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../redux/reducer/authenticationReducer";
import HomepageHeader from "./components/HomepageHeader";
import Greeting from "./components/Greeting";
import { useSelector } from "react-redux";
import Sidebar from "./components/Sidebar";
import Container from "../../sharable-components/Container";

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
      <Container className="flex">
        <div className="w-1/4">
          <Sidebar />
        </div>
        <div className="w-3/4">
          <Greeting userName={userName} />
        </div>
      </Container>
    </>
  );
}
