import React, { useEffect } from 'react'
import gsap from 'gsap';
import { useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Step02 = () => {

    gsap.registerPlugin(ScrollTrigger);
    const triggerRef = useRef();
    const gsap01Ref = useRef();
    const gsap02Ref = useRef();
    const gsap03Ref = useRef();
    const gsap04Ref = useRef();
    const gsap05Ref = useRef();

    useEffect(() => {
        gsap.timeline({
            scrollTrigger : {
                trigger : triggerRef.current, // 스크롤트리거 대상 : 어떤 요소를 만났을때 재생
                start : 'top 100%',
                end : '100% 100%',
                scrub : 2, 
                // markers:true,
                // pin:true, // 애니메이션 진행 시 현재화면에 고정
                // start:'top top',
                // end : '+=400', // 시작부분에서 400%까지 스크롤한 후 종료
            }
        })
        .fromTo(gsap01Ref.current, {y:'400%'},{y:'0'},1.2) 
        .fromTo(gsap02Ref.current, {y:'400%'},{y:'0'},1.4)
        .fromTo(gsap03Ref.current, {y:'400%'},{y:'0'},1.6)
        .fromTo(gsap04Ref.current, {y:'400%'},{y:'0'},1.8)
        .fromTo(gsap05Ref.current, {y:'400%'},{y:'0'},2)
    },[]);

  return (
    <section ref={triggerRef} className='relative h-dvh bg-black text-black flex justify-center items-center border-4 border-red-600'>
        <span ref={gsap01Ref} className=' w-60 h-80 bg-[#fee8b0] absolute left-1/2 top-1/2 rounded-2xl flex justify-center items-center text-black text-4xl font-bold' style={{transform:'translate(-50%, -50%) rotate(-12deg)'}} >Card1</span>
        <span ref={gsap02Ref} className=' w-60 h-80 bg-[#ffbbcc] absolute left-1/2 top-1/2 rounded-2xl flex justify-center items-center text-black text-4xl font-bold' style={{transform:'translate(-50%, -50%) rotate(12deg)'}} >Card2</span>
        <span ref={gsap03Ref} className=' w-60 h-80 bg-[#ffcccc] absolute left-1/2 top-1/2 rounded-2xl flex justify-center items-center text-black text-4xl font-bold' style={{transform:'translate(-50%, -50%) rotate(-15deg)'}} >Card3</span>
        <span ref={gsap04Ref} className=' w-60 h-80 bg-[#df9773] absolute left-1/2 top-1/2 rounded-2xl flex justify-center items-center text-black text-4xl font-bold' style={{transform:'translate(-50%, -50%) rotate(18deg)'}} >Card4</span>
        <span ref={gsap05Ref} className=' w-60 h-80 bg-[#d9eccb] absolute left-1/2 top-1/2 rounded-2xl flex justify-center items-center text-black text-4xl font-bold' style={{transform:'translate(-50%, -50%) rotate(-3deg)'}} >Card5</span>
    </section>
  )
}

export default Step02