"use client";
import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navigation } from "@/lib/data";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

const NavMobile = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    if (isDialogOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });
  return (
    <Sheet onOpenChange={() => setIsDialogOpen(!isDialogOpen)}>
      <SheetTrigger asChild className="hover:text-[#ceae7d] cursor-pointer">
        <GiHamburgerMenu size={30} />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-64 p-4 bg-header-background [&>button]:hidden border-none"
      >
        <SheetHeader className="text-white flex flex-row justify-between">
          <SheetTitle className="text-white text-2xl">Menu</SheetTitle>
          <SheetClose asChild className="hover:text-[#ceae7d] cursor-pointer">
            <IoCloseSharp size={30} />
          </SheetClose>
        </SheetHeader>
        <ul className="flex flex-col gap-4">
          {navigation.map((item) => (
            <li
              key={item.href}
              className="text-white hover:text-[#ceae7d] cursor-pointer"
            >
              <Link
                to={item.href}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                classID="transition-all
              duration-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default NavMobile;
