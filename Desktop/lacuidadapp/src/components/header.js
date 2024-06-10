import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/navbar";
import Link from "next/link"

export default function Header() {
  return (
      <Navbar className="font-roboto w-full md:w-3/4 mx-auto" css={{
        backgroundColor: 'rgba(0, 0, 0, 0)',
      }}>
      
      <NavbarContent className="py-2 flex flex-row gap-12 justify-between items-center px-8">
      <NavbarItem className="text-xl">
          <Link href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem className="text-xl">
          <Link href="#" aria-current="page">
            Company
          </Link>
        </NavbarItem>
        <NavbarItem className="text-xl">
          <Link href="#">
            Services
          </Link>
        </NavbarItem>
        
        <NavbarBrand>
        <Link href="/">
            <img
              src="logo.png"
              alt="Your Brand Logo"
              width="120"
              height="50"
            />
        </Link>
       </NavbarBrand>
        
        <NavbarItem className="text-xl">
          <Link href="#">
            Portfolio
          </Link>
        </NavbarItem>
        <NavbarItem className="text-xl">
          <Link  href="#">
            Careers
          </Link>
        </NavbarItem>
        <NavbarItem className="text-xl">
          <Link  href="#">
            Contact us
          </Link>
        </NavbarItem>
      </NavbarContent>
      
    </Navbar>


    
  );
}