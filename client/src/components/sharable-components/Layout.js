import BackgroundImage from "./BackgroundImage";
import Container from "./Container";
import Greeting from "../pages/home-page/components/Greeting";
import HomepageHeader from "../pages/home-page/components/HomepageHeader";
import { logout } from "../../redux/reducer/authenticationReducer";
import React from "react";
import Sidebar from "../pages/home-page/components/Sidebar";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Layout({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const userName = useSelector((state) => state.user.userName);

  return (
    <>
      <BackgroundImage className="someClassName" position="right" />
      <HomepageHeader/>
      <Container className="flex relative">
        <div className="w-1/4">
          <Sidebar onLogout={handleLogout} />
        </div>
        <div className="w-3/4 p-4 relative z-10">
          <Greeting userName={userName} />
          <div className="mt-4">{children}</div>
        </div>
      </Container>
    </>
  );
}
