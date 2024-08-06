import React, { useEffect } from 'react'
import gsap from 'gsap';
import { useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Step01 = () => {
    gsap.registerPlugin(ScrollTrigger); // 스크롤트리커 등록 : 이 부분부터 스크롤트리거 작성한다고 함수등록
    const triggerRef = useRef();
    const gsap01Ref = useRef();
    const gsap02Ref = useRef();
    const gsap03Ref = useRef();
    const gsap04Ref = useRef();

    /*
        https://gsap.com/resources/get-started/
        [ 타임라인 ]
        - 쉽게 조정가능하고 탄력적인 애니메이션 시퀀스를 생성하는 요소
        - 타임라인에 트윈을 추가하면 기본적으로 트윈이 추가된 순서대로 차례로 재생
    */


    // con02
    useEffect(() => {
        gsap.timeline({
            scrollTrigger : {
                trigger : triggerRef.current, // 스크롤트리거 대상 : 어떤 요소를 만났을때 재생
                start : 'top 90%', // 시작점 'top 90%' : 트리거 대상.con02 ul의 top 부분과 브라우저의 90% 부터 애니메이션 시작 'center center'으로 바꾸기
                end : '20% 0%', // 끝점 '20% 100%' : 트리거 대상.con02 ul의 20%와 브라우저의 100%가 만날때 애니메이션 종료 '20% 20%'으로 바꾸기
                scrub : 1, // 스크롤 이벤트는 스크롤 사용될때만 재생되도록 만들어주는 속성, 부드럽게 되감기 1 : 애니메이션 좀 빠름, 10 : 부드러움  // 잔상
                // markers:true,
            }
        })
        .to(gsap01Ref.current, {y:'-400px', duration:1, ease:'none'},0.2) // to 애니메이션 : -400px로 이동 / 1초 / 가속도 없음 / 딜레이시간 : 0.2초
        .to(gsap02Ref.current, {y:'-400px', duration:1, ease:'none'},0.4)
        .to(gsap03Ref.current, {y:'-400px', duration:1, ease:'none'},0.6)
        .to(gsap04Ref.current, {y:'-400px', duration:1, ease:'none'},0.8);
    },[]);


    

  return (
    <section className='h-dvh bg-black text-black flex justify-center items-center border-4 border-red-600'>
        <ul ref={triggerRef} className='flex w-3/4 justify-center font-bold gap-10'>
            <li ref={gsap01Ref} className='w-[22%] bg-[#fed700] h-[300px] rounded-3xl flex justify-center items-center'>Card1</li>
            <li ref={gsap02Ref} className='w-[22%] bg-[#fed700] h-[300px] rounded-3xl flex justify-center items-center'>Card2</li>
            <li ref={gsap03Ref} className='w-[22%] bg-[#fed700] h-[300px] rounded-3xl flex justify-center items-center'>Card3</li>
            <li ref={gsap04Ref} className='w-[22%] bg-[#fed700] h-[300px] rounded-3xl flex justify-center items-center'>Card4</li>
        </ul>
    </section>
  )
}

export default Step01