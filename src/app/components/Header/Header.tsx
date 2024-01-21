"use client";
import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function Header() {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const checkIfAtTop = () => {
      setIsAtTop(window.scrollY < 128);
    };

    window.addEventListener("scroll", checkIfAtTop);

    return () => {
      window.removeEventListener("scroll", checkIfAtTop);
    };
  }, []);

  return (
    <>
      <Navbar isBordered position="static">
        <NavbarBrand></NavbarBrand>
        <NavbarContent className="" justify="center">
          <NavbarItem className="text-xl tracking-wider">
            NOAH + RILEY
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end"></NavbarContent>
      </Navbar>
      <Navbar
        id="toHome"
        position="sticky"
        isBlurred={false}
        className={`flex justify-end bg-transparent transition-opacity duration-100 ease-in  ${
          isAtTop ? "opacity-0" : "opacity-100"
        }`}
      >
        <NavbarBrand></NavbarBrand>
        <NavbarItem>
          <Button
            as={Link}
            radius="full"
            isIconOnly
            color="primary"
            href="#"
            variant="flat"
          >
            <KeyboardArrowUpIcon />
          </Button>
        </NavbarItem>
      </Navbar>
    </>
  );
}
