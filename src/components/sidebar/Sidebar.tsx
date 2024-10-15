import React, { useState, useRef, useEffect } from "react";
import { menuItems } from "@/components/sidebar/DataSidebar";
import Navbar from "@/components/sidebar/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
interface SiderbarProps {
  user: any;
}

const Sidebar = ({ user }: SiderbarProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <Navbar />
      <Button
        onClick={() => {
          setIsVisible(!isVisible);
        }}
        className="z-20 absolute inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z" />
        </svg>
      </Button>

      <aside
        id="sidebar"
        className={`fixed top-0 left-0 z-50 h-screen dark:bg-gray-800 transition-transform md:translate-x-0 ${isVisible ? "translate-x-0" : "-translate-x-full"
          }`}
        aria-label="Sidebar"
        onMouseLeave={() => setIsVisible(false)}
      >
        <div className="h-full p-4 overflow-y-auto">
          <a href="#" className="flex items-center ps-2.5 mb-5">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 me-3 sm:h-7" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Robert</span>
          </a>
          <ul className="space-y-2 font-medium ">
            {menuItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target={item.newTab ? "_blank" : undefined}
                  rel={item.newTab ? "noopener noreferrer" : undefined}
                  className="flex items-center p-2 text-gray-200 rounded-lg dark:text-white hover:bg-sky-500 w-40"
                >
                  {item.icon}
                  <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <div className={`${"xl:ml-48 lg:ml-48 md:ml-48 sm:ml-0"}`} />

      <div className={`fixed inset-0 z-40 bg-gray-500 bg-opacity-50 backdrop-blur-md transition-opacity ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`} />
    </div>
  );
};

export default Sidebar;

