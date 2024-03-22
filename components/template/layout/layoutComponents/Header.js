import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

function Header(props) {
  const router = useRouter();

  return (
    <>
      <header>
        <section className="headerSection">
          <div className="headerGrid">
            <div>로고</div>
            <div>메뉴</div>
            <div>링크</div>
          </div>
        </section>
      </header>
    </>
  );
}

export default Header;