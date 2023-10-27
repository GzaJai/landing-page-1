'use client'
import React, {useState} from "react";
import Button from "@/components/Button";
import { BiMenu } from "react-icons/bi";
import SideBar from "./SideBar";

const Navbar = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const handleSidebar = () =>{
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <>
      <header className="flex bg-indigo-500 justify-between px-10 py-4">
        <Button onClick={handleSidebar} className="flex  text-white text-3xl">
          <BiMenu />
        </Button>
        <h1 className="text-2xl font-semibold text-white">Librería Silver</h1>
      </header>
        <SideBar estado={isSidebarOpen}/>
    </>
  );
};

export default Navbar;
