import React from 'react';
import { IoMenu } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar sticky top-0 bg-white flex flex-col items-center justify-between w-16 h-[625px] rounded-xl mx-2 my-2 ">
        <ul className='flex flex-col gap-7 my-5 justify-center items-center '>
          <li className='h-6 w-6 flex justify-center items-center'><img src="logo.png" alt="" className='h-6 max-w-6'/></li>
          <li><IoMenu className='h-6 w-6'/></li>
          <Link href='/' className='text-black py-1 px-1 hover:bg-black hover:text-white hover:rounded-md '><IoHome className='h-6 w-6 '/></Link>
          <Link href='/bagItems' className='text-black py-1 px-1 hover:bg-black hover:text-white hover:rounded-md '><RiShoppingBag4Fill className='h-6 w-6'/></Link>
        </ul>
   
      <div className="bg-red px-1 py-1 my-6 rounded-md h-6 w-6 flex justify-center items-center">
      <FiLogOut className=' max-h-6 max-w-6 text-white'/>
      </div>
    </nav>
  );
};

export default Navbar;
