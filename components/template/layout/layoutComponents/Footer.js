import React from "react";
import Router from "next/router";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <>
      <footer>
        <section>
          <div className="footerGrid">
            <span>Copyright JungChungWonPotFolio All rights reserved.</span>
            <div className="footerItem">
              <div>
                <Link href={'https://github.com/ChungwonJ'} target='_blank'>
                  <FaGithub />
                </Link>
              </div>
              <div>
                <Link href={'https://www.instagram.com/jungchungwon/'} target='_blank'>
                  <FaInstagram />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}

export default Footer;
