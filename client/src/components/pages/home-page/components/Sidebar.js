import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Container from "../../../sharable-components/Container";
import {
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/home", icon: HomeIcon, current: true },
  { name: "Profile", href: "/profile", icon: UsersIcon, current: false },
  { name: "Completed", href: "/completed", icon: FolderIcon, current: false },
  { name: "Settings", href: "/settings", icon: ChartPieIcon, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar({ profileImage }) {
  const userName = useSelector((state) => state.user.userName);
  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-50 text-indigo-600"
                        : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                      "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current
                          ? "text-indigo-600"
                          : "text-gray-400 group-hover:text-indigo-600",
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

          <li className="-mx-6 mt-auto">
            <a
              href="#"
              className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
            >
              <img
                className="h-8 w-8 rounded-full bg-gray-50"
                src={profileImage}
                alt="User Avatar"
              />
              <span className="sr-only">Your profile</span>
              <span aria-hidden="true">{userName}</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
