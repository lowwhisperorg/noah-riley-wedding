import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import React from "react";


export default function Header() {
  return (
    <Navbar isBordered position="static">
      <NavbarBrand>
      </NavbarBrand>
      <NavbarContent className="" justify="center">
        <NavbarItem className="text-xl tracking-wider">
          NOAH + RILEY
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">

      </NavbarContent>
    </Navbar>
  );
}