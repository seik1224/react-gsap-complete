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
            let image = elem.querySelector('img.fadeImg');

            // 마우스 위치에 따라 이미지 위치를 업데이트하는 함수
            let align = e => {
                setXRef.current(e.clientX);
                setYRef.current(e.clientY);
            };

            // 마우스 움직임 추적을 시작하는 함수
            let startPoint = () => document.addEventListener('mousemove', align);

            // GSAP를 사용해 이미지 페이드 인/아웃 애니메이션을 준비
            let fade = gsap.to(image, {autoAlpha:0.9,ease:'none',paused:true});

            // 마우스가 링크에 진입할 때 실행될 함수를 정의
            elem.onmouseenter = (e) => {
                fade.play(); // 이미지 페이드 인 애니메이션을 시작
                startPoint(); // 마우스 움직임 추적을 시작

                // 이전에 활성화된 이미지가 있다면 실행
                if(activeImageRef.current) {
                    gsap.set(image, {
                        x:gsap.getProperty(activeImageRef.current, 'x'), // 활성 이미지의 x 좌표를 현재 이미지의 x 좌표로 설정
                        y:gsap.getProperty(activeImageRef.current, 'y') // 활성 이미지의 y 좌표를 현재 이미지의 y 좌표로 설정
                    })
                }

                // 현재 이미지를 활성 이미지로 설정
                activeImageRef.current = image;
                setXRef.current = gsap.quickTo(image, 'x', {duration:0.5}); // 이미지의 x 좌표를 빠르게 업데이트
                setYRef.current = gsap.quickTo(image, 'y', {duration:0.5}); // 이미지의 y 좌표를 빠르게 업데이트

                align(e); // 마우스 위치를 업데이트
            }
            elem.onmouseleave = () => fade.reverse() // 마우스가 링크를 떠날 때 이미지 페이드 아웃 애니메이션을 역방향으로 재생
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