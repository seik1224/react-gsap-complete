import React, { useEffect } from 'react'
import gsap from 'gsap';
import { useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Step07 = () => {
    gsap.registerPlugin(ScrollTrigger);
    let activeImageRef = useRef(null);
    const linksRef = useRef([]);
    const setXRef = useRef(null);
    const setYRef = useRef(null);

    // useEffect(() => {
    //     linksRef.current.forEach((elem) => {
    //         let image = elem.querySelector('img.fadeImg'),
    //         align = e => {
    //             setXRef.current(e.clientX);
    //             setYRef.current(e.clientY);
    //         },

    //         startPoint = () => document.addEventListener('mousemove', align),

    //         fade = gsap.to(image, {autoAlpha:0.8,ease:'none',paused:true})

    //         elem.addEventListener('mouseenter', (e)=>{
    //             fade.play();
    //             startPoint();

    //             if(activeImageRef.current) {
    //                 gsap.set(image, {
    //                     x:gsap.getProperty(activeImageRef.current, 'x'),
    //                     y:gsap.getProperty(activeImageRef.current, 'y')
    //                 })
    //             }
    //             activeImageRef.current = image;
    //             setXRef.current = gsap.quickTo(image, 'x', {duration:0.5});
    //             setYRef.current = gsap.quickTo(image, 'y', {duration:0.5});

    //             align(e);
    //         })
    //         elem.addEventListener('mouseleave', ()=> fade.reverse())
    //     });
    // }, []);

    useEffect(() => {
        linksRef.current.forEach((elem) => {
            let image = elem.querySelector('img.fadeImg'),
            align = e => {
                setXRef.current(e.clientX);
                setYRef.current(e.clientY);
            },

            startPoint = () => document.addEventListener('mousemove', align),

            fade = gsap.to(image, {autoAlpha:0.9,ease:'none',paused:true})

            elem.onmouseenter = (e) => {
                fade.play();
                startPoint();

                if(activeImageRef.current) {
                    gsap.set(image, {
                        x:gsap.getProperty(activeImageRef.current, 'x'),
                        y:gsap.getProperty(activeImageRef.current, 'y')
                    })
                }
                activeImageRef.current = image;
                setXRef.current = gsap.quickTo(image, 'x', {duration:0.5});
                setYRef.current = gsap.quickTo(image, 'y', {duration:0.5});

                align(e);
            }
            elem.onmouseleave = () => fade.reverse()
        });
    }, []);

  return (
    <section className='w-full text-center bg-black text-white py-64 border-4 border-red-600 relative z-50'>
        <ul className='w-1/2 mx-auto my-0'>
            {['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg', 'img6.jpg', 'img7.jpg'].map((src, index) => (
                <li className='mb-20' key={index}>
                    <a href='/' className='block w-full h-full' ref={el => linksRef.current[index] = el}>
                        <img className='fixed top-0 left-0 w-[350px] h-[220px] object-cover brightness-50 opacity-0 fadeImg' src={src} alt=''></img>
                        <p className="text-8xl font-bold leading-none tracking-tight transition-all opacity-100 ">Design <span className="inline-block w-3 h-3 bg-[#f45b40] rounded-full ml-10"></span></p>
                        <p className="text-6xl transition-all opacity-100 ">Agency</p>
                    </a>
                </li>
            ))}
        </ul>
    </section>
  )
}

export default Step07