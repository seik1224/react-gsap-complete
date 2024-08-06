import React, { useEffect } from 'react'
import gsap from 'gsap';
import { useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Step04 = () => {
    gsap.registerPlugin(ScrollTrigger);
    const triggerRef = useRef();
    const gsapRef = useRef();
    const videoRef = useRef();

    useEffect(()=>{
        gsap.timeline({
            scrollTrigger:{
                trigger:triggerRef.current,
                start:'0% 80%',
                end:'100% 100%',
                scrub:1,
                // markers:true
            }
        })
        .to(gsapRef.current, {backgroundColor:'#fff', color:'#000', ease:'none', duration:5}, 0)
        // .to('.svgAni path', {stroke : "#000", ease:'none', duration:5}, 0)
        .fromTo(videoRef.current, 
            {'clip-path':'inset(60% 60% 60% 60% round 30%)'},
            {'clip-path':'inset(0% 0% 0% 0% round 0%)', ease:'none', duration:10}, 0
        )

    },[]);
    
  return (
    <>
    <section ref={gsapRef} className='h-dvh bg-black text-white flex justify-center items-center border-4 border-red-600'>
        <div className='text-8xl uppercase leading-tight'>
            <span className='text-transparent block' style={{WebkitTextStroke:'2px #b1dd40'}}>GSAP</span>
            ScrollTrigger
        </div>
    </section>
    {/* 
        [ 클립패스 ] https://jh-make.tistory.com/entry/CSS-clip-path
        포토샵의 마스크처럼 패스영역만 보이게 함
        사용법 : inset, 원, 다각형, 패스
        inset 잘라내기 클립패스

        - inset(상하,좌우);
        - inset(상,좌우,하);
        - inset(10%); => 상, 하, 좌, 우
        - inset(top, right, bottom, left); 
    */}
    <section ref={triggerRef} className='w-full h-dvh relative overflow-hidden'>
        <div>
            {/*  모바일 IOS 등 모든환경 자동재생 */}
            <video ref={videoRef}  className='w-dvw h-dvh object-cover absolute left-0 top-0' autoPlay muted loop playinline> 
                <source src='video.mp4' type="video/mp4" />
            </video>
            <div className='absolute w-full text-center left-0 top-1/2 -translate-y-1/2 text-white'>
                <h2 className='text-8xl leading-none tracking-widest'>Creativeness is all you need<br/>for Digital Design</h2>
            </div>
        </div>
    </section>
    </>
  )
}

export default Step04