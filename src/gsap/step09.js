import React, { useEffect } from 'react'
import gsap from 'gsap';
import { useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Step09 = () => {
    gsap.registerPlugin(ScrollTrigger);
    const stageRef = useRef(null);
    const triggerRef = useRef(null);

    const frameCount  = 14 // 총갯수에서 -1을 빼면 됨
    const offsetValue = 100; // 백분율로 계산

    useEffect(()=>{
        gsap.to(stageRef.current, {   // 2.0 -> maxwidth : 200px 한 컷의 넓이
        backgroundPosition: (- offsetValue * frameCount * 2.0) + "px center", 
        // backgrounPostion의 x축은 offsetValue와  frameCount와 2.0(한컷의 너비) 곱한 값을  뺀값(단위 px)
        //연산순위 ()가 먼저 연산되고 * / %이며, + - 순임
        
        ease: "steps(" + frameCount + ")", // 마우스 휠을 프레임 컷수에 맞춰준다
        scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "+=" + (frameCount * offsetValue),//frameCount 와 offsetValue를 곱해서 시작점에 더한값
        pin: true, 
        scrub: true 
        }
        });  
    },[]);
            



  return (
    <section ref={triggerRef} className='w-full h-dvh relative bg-black text-white border-4 border-red-600'>
        <div ref={stageRef} className="h-full max-w-[200px] my-0 mx-auto" style={{background: 'url(img_3.png)',backgroundRepeat: 'no-repeat', backgroundPosition: '0 center'}}></div>
        <p className="w-[450px] h-[450px] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img className="w-full" src="spin_large.png" alt="" />
        </p>
    </section>
  )
}

export default Step09