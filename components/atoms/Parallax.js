import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import JobCard from '../mocules/JobCard';
import { useRouter } from 'next/router';

const Parallax = (props) => {
  const router = useRouter();
  const parallaxContRef = useRef();
  useEffect(() => {
    const scroll = () => {
      if (!parallaxContRef.current) return; 
      const parallaxCont = parallaxContRef.current;
      let scrollTop = window.pageYOffset;
      let parallaxWidth = parallaxCont.offsetWidth;

      document.body.style.height = `${parallaxWidth}px`;
      let viewWidth = parallaxWidth - window.innerWidth;
      let goLeft = scrollTop * (viewWidth / (parallaxWidth - window.innerHeight));

      gsap.to(parallaxCont, { left: -goLeft, ease: "power2.out" });

      requestAnimationFrame(scroll);
    };

    if (router.pathname === '/components/work' || router.pathname === '/components/sideproject') {
      const parallaxCont = parallaxContRef.current;
      if (parallaxCont) {
        document.body.style.height = `${parallaxCont.offsetWidth}px`;
      }
      scroll();
    } else {
      document.body.style.height = "auto";
    }

    return () => {
      document.body.style.height = "auto";
    };
  }, [router.pathname]);
  return (
    <>
      <div className="parallaxsWrap" ref={parallaxContRef}>
        {props.ITEM.map((item,index)=>(
          <JobCard key={index} item={item}/>
        ))}
      </div>
    </>
  );
};

export default Parallax;