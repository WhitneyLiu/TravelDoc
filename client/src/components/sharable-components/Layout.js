import BackgroundImage from "./BackgroundImage";
import Container from "./Container";
import { Dialog, Transition } from "@headlessui/react";
import Greeting from "../pages/home-page/components/Greeting";
import HeaderLogo from "../pages/home-page/components/HeaderLogo";
import { logout } from "../../redux/reducer/authenticationReducer";
import React, { useState, Fragment } from "react";
import Sidebar from "../pages/home-page/components/Sidebar";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Layout({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const userName = useSelector((state) => state.user.userName);

  return (
    <>
      {!open && (
        <button
          className="md:hidden fixed top-0 left-0 z-50 p-4"
          onClick={() => setOpen(true)}
        >
          <div className="flex flex-col justify-around h-6">
            <div className="w-6 h-1 bg-indigo-700 rounded-full"></div>
            <div className="w-6 h-1 bg-indigo-700 rounded-full"></div>
            <div className="w-6 h-1 bg-indigo-700 rounded-full"></div>
          </div>
        </button>
      )}

      {open && (
        <div className="md:hidden fixed left-0 top-0 mt-4 ml-4 z-50">
          <HeaderLogo className="h-12 w-auto" />
        </div>
      )}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 overflow-hidden z-40"
          onClose={() => setOpen(false)}
        >
          <Dialog.Panel className="pointer-events-auto relative w-screen w-4/5 md:hidden">
            <Sidebar onLogout={handleLogout} />
          </Dialog.Panel>
        </Dialog>
      </Transition.Root>

      <BackgroundImage
        className="someClassName hidden md:block"
        position="right"
      />
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
