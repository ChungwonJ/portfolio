import { FOOTERLINKS } from "@/define/define";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function Footer() {
  const router = useRouter()
  return (
    <>
      <footer>
        <div className="footerGrid">
          {FOOTERLINKS.map((link) => {
            if (link.isIcon) {
              return (
                <div key={link.id}>
                  {link.content.map((iconLink) => (
                    <Link className="mainIcon" key={iconLink.id} href={iconLink.href} target="_blank">
                      {iconLink.icon}
                    </Link>
                  ))}
                </div>
              );
            } else {
              return (
                <div
                  className="navList"
                  key={link.id}
                  onClick={()=>{router.push(link.link)}}
                >
                  {link.content}
                </div>
              )
            }
          })}
        </div>
      </footer>
    </>
  );
}

export default Footer;
