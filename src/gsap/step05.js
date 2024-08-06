import React, { useEffect } from 'react'
import gsap from 'gsap';
import { useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Step05 = () => {
    gsap.registerPlugin(ScrollTrigger);
    const triggerRef = useRef();
    const titleRef = useRef();
    const text01Ref = useRef();
    const text02Ref = useRef();
    const workRef = useRef();

    useEffect(()=>{
        gsap.timeline({
            scrollTrigger:{
                trigger:triggerRef.current,
                start:'0% 100%',
                end:'0% 20%',
                scrub:1,
                //markers:true
            }
        })
        .fromTo(text01Ref.current, {x:'-100%'}, {x:'0%', ease:'none', duration:5},0)
        .fromTo(text02Ref.current, {x:'100%'}, {x:'0%', ease:'none', duration:5},0);


        gsap.timeline({
            scrollTrigger:{
                trigger:workRef.current,
                start:'0% 100%',
                end:'0% 100%',
                scrub:1,
                //markers:true
            }
        })
        // .to(triggerRef.current, {backgroundColor:'#000',color:'#fff', ease:'none',duration:5},0)
        .to(titleRef.current, {position:'absolute',ease:'none',left:'0',top:'0',width:'100%',duration:5},0)
        .fromTo(workRef.current,{margin:'0 auto'},{margin:'100vh auto 0',position:'relative',zIndex:'10',duration:1},0)


        gsap.timeline({
            scrollTrigger:{
                trigger:workRef.current,
                start:'100% 50%',
                end:'100% 0%',
                scrub:1,
                //markers:true
            }
        })
        .to(text01Ref.current, {x:'-100%', ease:'none', duration:5},0)
        .to(text02Ref.current, {x:'100%', ease:'none', duration:5},0);


    },[]);


  return (
    
    <section ref={triggerRef} className='overflow-hidden pb-[1000px] bg-black border-4 border-red-600'>
        {/* 원래 absolute를 주고 pin을 주는게 맞는 방식 */}
        <div ref={titleRef} className='w-full h-dvh text-[180px] text-center leading-none pt-[30vh] box-border'>
            <p ref={text01Ref} className='text-[220px] text-white'>My</p>
            <p ref={text02Ref} className='text-[220px] text-white'>Work</p>
        </div>
        <ul ref={workRef} className='w-3/4 my-0 mx-auto flex flex-wrap justify-between'>
            <li className='w-[45%] mt-52'>
                <a className='block' href="/">
                    <div>
                        <img className='w-full' src="work1.jpg" alt="" />
                    </div>
                    <div>
                        <h3 className='text-2xl mt-5 mx-0 my-1'>Site name</h3>
                        <div className='flex justify-between text-white'>
                            <p>UI/UX Design, Web Publishing</p>
                            <p>2023</p>
                        </div>
                    </div>
                </a>
            </li>
            <li className='w-[45%] mt-0'>
                <a className='block' href="/">
                    <div>
                        <img className='w-full' src="work2.jpg" alt="" />
                    </div>
                    <div>
                        <h3 className='text-2xl mt-5 mx-0 my-1'>Site name</h3>
                        <div className='flex justify-between text-white'>
                            <p>UI/UX Design, Web Publishing</p>
                            <p>2023</p>
                        </div>
                    </div>
                </a>
            </li>
            <li className='w-[45%] mt-52'>
                <a className='block' href="/">
                    <div>
                        <img className='w-full' src="work3.jpg" alt="" />
                    </div>
                    <div>
                        <h3 className='text-2xl mt-5 mx-0 my-1'>Site name</h3>
                        <div className='flex justify-between text-white'>
                            <p>UI/UX Design, Web Publishing</p>
                            <p>2023</p>
                        </div>
                    </div>
                </a>
            </li>
            <li className='w-[45%] mt-0'>
                <a className='block' href="/">
                    <div>
                        <img className='w-full' src="work4.jpg" alt="" />
                    </div>
                    <div>
                        <h3 className='text-2xl mt-5 mx-0 my-1'>Site name</h3>
                        <div className='flex justify-between text-white'>
                            <p>UI/UX Design, Web Publishing</p>
                            <p>2023</p>
                        </div>
                    </div>
                </a>
            </li>
            <li className='w-[45%] mt-52'>
                <a className='block' href="/">
                    <div>
                        <img className='w-full' src="work5.jpg" alt="" />
                    </div>
                    <div>
                        <h3 className='text-2xl mt-5 mx-0 my-1'>Site name</h3>
                        <div className='flex justify-between text-white'>
                            <p>UI/UX Design, Web Publishing</p>
                            <p>2023</p>
                        </div>
                    </div>
                </a>
            </li>
            <li className='w-[45%] mt-0'>
                <a className='block' href="/">
                    <div>
                        <img className='w-full' src="work6.jpg" alt="" />
                    </div>
                    <div>
                        <h3 className='text-2xl mt-5 mx-0 my-1'>Site name</h3>
                        <div className='flex justify-between text-white'>
                            <p>UI/UX Design, Web Publishing</p>
                            <p>2023</p>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    </section>
  )
}

export default Step05