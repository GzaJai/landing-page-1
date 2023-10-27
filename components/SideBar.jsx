import React, { useEffect, useState } from 'react'
import Button from './Button'

const SideBar = (props) => {
    if (props.estado){

        return (
        <div className='flex absolute top-16 left-0 min-h-screen bg-indigo-500'>
            <div className='inline-flex flex-col h-screen max-h-screen overflow-auto px-10 py-4 gap-5 text-white'>
                <Button className={"hover:bg-orange-400 hover:text-black p-1 font-bold rounded"}>Home</Button>
                <Button className={"hover:bg-orange-400 hover:text-black p-1 font-bold rounded"}>Products</Button>
                <Button className={"hover:bg-orange-400 hover:text-black p-1 font-bold rounded"}>Clients</Button>
                <Button className={"hover:bg-orange-400 hover:text-black p-1 font-bold rounded"}>About</Button>
                <Button className={"hover:bg-orange-400 hover:text-black p-1 font-bold rounded"}>Contact</Button>
            </div>
        </div>
  )
    }}

export default SideBar