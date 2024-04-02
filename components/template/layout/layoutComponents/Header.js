import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { MENULIST } from "@/define/define";

function Header() {
  const router = useRouter();
  return (
    <>
      <header>
        <div className="headerGrid">
          {MENULIST.map((item, index) => (
            <div className="navList" key={index} onClick={()=>{router.push(item.link)}}>
              {item.title}
            </div>
          ))}
        </div>
      </header>
    </>
  );
}

export default Header;