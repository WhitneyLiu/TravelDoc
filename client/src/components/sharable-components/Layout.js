import BackgroundImage from "./BackgroundImage";
import Container from "./Container";
import Greeting from "../pages/home-page/components/Greeting";
import HomepageHeader from "../pages/home-page/components/HomepageHeader";
import { logout } from "../../redux/reducer/authenticationReducer";
import React from "react";
import Sidebar from "../pages/home-page/components/Sidebar";
import StatBox from "../pages/home-page/components/StatsBox";
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
      <BackgroundImage
        className="someClassName hidden md:block"
        position="right"
      />
      <HomepageHeader />
      <Container className="flex relative">
        <div
          className="hidden md:block w-1/4 fixed top-0 left-0"
          style={{ height: "100vh", zIndex: 10 }}
        >
          <Sidebar onLogout={handleLogout} />
        </div>
        <div className="w-full md:w-3/4 p-4 relative z-10 ml-0 md:ml-1/4">
          <div className="fixed left-1/4 top-0 mt-5 ml-[-100px]">
            <Greeting userName={userName} />
          </div>
          <div className="mt-4">{children}</div>
        </div>
      </Container>
    </>
  );
}
