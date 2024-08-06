import React, { useEffect } from 'react'
import gsap from 'gsap';
import { useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Step03 = () => {
    gsap.registerPlugin(ScrollTrigger);
    const triggerRef = useRef();
    const gsapRef = useRef();
    const pRefs = useRef([]);

    useEffect(()=>{
        gsap.timeline({
            scrollTrigger:{
                trigger:triggerRef.current,
                start:'0% 50%',
                end:'30% 0%',
                scrub:1,
                markers:true
            }
        }).fromTo(gsapRef.current, 
        {'width':'0','height':'0','duration':'10','top':'3%','ease':'elastic'}, //elastic : 반동있는 가속도
        {'width':'2500px','height':'2500px','duration':'10','top':'30%'},0) 
    
    
    // gsap.utils.toArray('.con02 .textBox p').forEach((e)=>{ // 배열로 만들고 forEach문으로 반복
    //     gsap.timeline({
    //         scrollTrigger : {
    //             trigger : e,
    //             start: 'top 70%',
    //             end: 'bottom 90%',
    //             // toggleClass : {'targets':e, className :'active'}, 클래스를 붙일수도 있음
    //             //toggleActions: 'play none none reverse',
    //             scrub:1,
    //             // markers:true
    //         }
    //     }).fromTo(e,
    //         {y: 50, opacity: 0, duration: .4},
    //         {y: 0, opacity: 1},
    //         0
    //     )
    // });
    
        pRefs.current.forEach((e) => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: e,
                    start: 'top 70%',
                    end: 'bottom 90%',
                    scrub: 1,
                }
            }).fromTo(e,
                { y: 50, opacity: 0, duration: .4 },
                { y: 0, opacity: 1 },
                0
            );
        });
    },[]);

    

    

  return (
    <section ref={triggerRef} className='relative overflow-hidden h-dvh bg-white text-black flex justify-center items-center border-4 border-red-600'>
        <span ref={gsapRef} className='block w-[2500px] h-[2500px] rounded-full absolute top-[40%] left-1/2 -translate-x-1/2 bg-black'></span>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 text-white text-center z-10'>
            {/* <p className='text-6xl font-bold tracking-tight leading-none'>HTML5 + CSS3</p>
            <p className='text-6xl font-bold tracking-tight leading-none'>JAVASCRIPT</p>
            <p className='text-6xl font-bold tracking-tight leading-none'>JQUERY</p>
            <p className='text-6xl font-bold tracking-tight leading-none'>REACT + GSAP</p> */}
            {['HTML5 + CSS3', 'JAVASCRIPT', 'JQUERY', 'REACT + GSAP'].map((text, index) => (
                    <p key={index} ref={el => pRefs.current[index] = el} className='text-6xl font-bold tracking-tight leading-none'>{text}</p>
                ))}
        </div>
    </section>
  )
}

export default Step03