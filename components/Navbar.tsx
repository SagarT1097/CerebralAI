import React from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import Mobilesidebar from "./mobilesidebar";
import { getApiLimitCount } from "@/lib/apilimit";

const Navbar = async () => {
  const apiLimitCount = await getApiLimitCount();

  return (
    <div className="flex items-center p-4">
      <Mobilesidebar apiLimitCount={apiLimitCount} />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/"></UserButton>
      </div>
    </div>
  );
};

export default Navbar;
