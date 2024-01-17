import React from "react";
import { Button, Navbar, NavbarToggle, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";

import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

export default function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-senter whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="py-2 px-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Sahand's
        </span>
        Blog
      </Link>

      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>

      <div className="flax gap-2 md:order-2">
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
          <FaMoon />
        </Button>

        <link to="/sign-in">
          <Button gradientDuoTone="purpleToBlue">Sign In</Button>
        </link>
        <NavbarToggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <link to="/">Home</link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <link to="/about">About</link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} as={"div"}>
          <link to="/projects">Projects</link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
