import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

function Header(props) {
  const router = useRouter();

  return (
    <>
      <header>
        <div className="headerGrid">
          <Link href={''}>Home</Link>
          <Link href={''}>About</Link>
          <Link href={''}>Work</Link>
          <Link href={''}>Side</Link>
          <Link href={''}>Contact</Link>
        </div>
      </header>
    </>
  );
}

export default Header;