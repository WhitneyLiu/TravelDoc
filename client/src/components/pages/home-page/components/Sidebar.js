import { getSession } from "../../../../redux/reducer/authenticationReducer";
import HeaderLogo from "./HeaderLogo";
import {
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar({ profileImage, onLogout }) {
  const email = useSelector((state) => state.authentication.session.email);
  const userName = email.split("@")[0];
  const [showDropdown, setShowDropdown] = useState(false);
  const { pathname } = useLocation();
  const navigation = [
    {
      name: "Home",
      href: "/home",
      icon: HomeIcon,
      current: pathname === "/home",
    },
    {
      name: "Profile",
      href: "/profile",
      icon: UsersIcon,
      current: pathname === "/profile",
    },
    {
      name: "Completed",
      href: "/completed",
      icon: FolderIcon,
      current: pathname === "/completed",
    },
    {
      name: "Settings",
      href: "/settings",
      icon: ChartPieIcon,
      current: pathname === "/settings",
    },
  ];

  return (
    <div
      style={{ height: "100vh" }}
      className="fixed top-0 left-0 w-full md:w-1/4 lg:w-1/6 flex flex-col bg-indigo-700 px-6 pt-16 md:hidden lg:block"
    >
      <div className="hidden md:block fixed left-0 top-0 mt-4 ml-4 z-50">
        <HeaderLogo className="h-12 w-auto" />
      </div>
      <nav className="flex-1 flex flex-col justify-between">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item, index) => (
                <li key={item.name} className={index === 0 ? "mt-4" : ""}>
                  <Link
                    to={item.href}
                    className={classNames(
                      item.current
                        ? "bg-indigo-800 text-white rounded-lg" // Added rounded-lg for more rounded corners
                        : "text-white hover:bg-indigo-600 rounded-lg", // Added rounded-lg for more rounded corners
                      "group flex gap-x-3 p-2 text-sm leading-6 font-semibold"
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current
                          ? "text-white"
                          : "text-indigo-300 group-hover:text-white",
                        "h-6 w-6 shrink-0"
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
      <div className="absolute bottom-5 left-0 w-full p-2">
        <div
          className="group flex gap-x-3 p-2 text-sm leading-6 font-semibold text-white hover:bg-indigo-600 rounded-lg mx-2 cursor-pointer"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <UserCircleIcon
            className="h-7 w-7 rounded-full text-white"
            aria-hidden="true"
          />
          <span>{userName}</span>
        </div>
        {showDropdown && (
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-56 origin-bottom-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1"
            >
              <button
                onClick={() => {
                  onLogout();
                  setShowDropdown(false);
                }}
                className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                role="menuitem"
                tabIndex="-1"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
