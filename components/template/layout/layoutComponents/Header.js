import Link from "next/link";
import React, { useState, useEffect } from "react";
import { MENULIST } from "@/define";

function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [header,setHeader] = useState('')
  const [headerClassName, setHeaderClassName] = useState("headerGrid");

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });

  useEffect(() => {
    if (scrollPosition < 100) {
      setHeaderClassName("headerGrid");
      setHeader('')
    } else {
      setHeaderClassName("headerGrid active");
      setHeader('headerChange')
    }
  }, [scrollPosition]);
  return (
    <>
      <header className={header}>
        <div className={headerClassName}>
          {MENULIST.map((item, index) => (
            <Link key={index} href={item.link}>{item.title}</Link>
          ))}
        </div>
      </header>
    </>
  );
}

export default Header;