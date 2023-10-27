'use client'
import React, {useState} from "react";
import Button from "@/components/Button";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {

  const [isNavOpen, setIsNavOpen] = useState(false)

  const handleClick = () =>{

  }

  return (
    <>
      <header className="flex bg-indigo-500 justify-between px-10 py-4">
        <h1 className="text-2xl font-semibold text-white">Librería Silver</h1>
        <Button onClick={()=>{console.log("hola")}} className="flex  text-white text-3xl">
          <BiMenu />
        </Button>
      </header>
    </>
  );
};

export default Navbar;
