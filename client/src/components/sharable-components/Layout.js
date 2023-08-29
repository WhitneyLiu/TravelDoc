import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/reducer/authenticationReducer";
import HomepageHeader from "../pages/home-page/components/HomepageHeader";
import Greeting from "../pages/home-page/components/Greeting";
import { useSelector } from "react-redux";
import Sidebar from "../pages/home-page/components/Sidebar";
import Container from "./Container";

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
        <HomepageHeader onLogout={handleLogout} />
        <Container className="flex">
          <div className="w-1/4">
            <Sidebar />
          </div>
          <div className="w-3/4 p-4">
            <Greeting userName={userName} />
            <div className="mt-4">
              {children}
            </div>
          </div>
        </Container>
      </>
    );
  };
