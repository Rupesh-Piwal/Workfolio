"use client";
import React, { useState } from "react";
// import { HoveredLink, Menu, MenuItem, ProductItem } from "@/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 text-xl border", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"#"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="HOME"
          ></MenuItem>
        </Link>
        <Link href={"#"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="PROJECTS"
          ></MenuItem>
        </Link>
        <Link href={"#"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="ABOUT"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default Navbar;
