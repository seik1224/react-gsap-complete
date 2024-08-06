import React, { useEffect } from 'react'
import gsap from 'gsap';
import { useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Step06 = () => {
    gsap.registerPlugin(ScrollTrigger);
    const triggerRef = useRef(null);
    const listRefs = useRef([]);
    const imgBoxRefs = useRef([]);
    const textBoxRefs = useRef([]);
    const numRefs = useRef([]);
    const counterRef = useRef(null);
    

    useEffect(()=>{
        ScrollTrigger.matchMedia({
            '(min-width:1024px)':function(){ // 반응형
                // let list = gsap.utils.toArray('.work ul li');
                let list = listRefs.current;
                let scrollTween = gsap.to(list, {
                    xPercent: -100 * (list.length - 1), // 원래 리스트의 개수보다 1을 빼서 길이를 구한후에 가로로 이동
                    ease:'none',
                    scrollTrigger : {
                        trigger:triggerRef.current,
                        pin:true,
                        scrub:1,
                        start:'center center',
                        end:'300%', // 뷰포트 높이의 300% -> 숫자가 클수록 느려짐
                        markers : true
                    }
                });

                imgBoxRefs.current.forEach(imgBox => {
                    gsap.timeline({
                        scrollTrigger : {
                            trigger : imgBox,
                            containerAnimation: scrollTween, // 가로스크롤에서 trigger시점을 잡아주는 필수 옵션 :: list의 길이를 구해서 가로로 이동하는 값과 .work의 영역을 가지는 scrollTween 
                            start : 'center right', // 가로스크롤 오른쪽이 bottom
                            end : 'center center',
                            scrub: true,
                            // markers:true
                        }
                    })
                    .to(imgBox, {'clip-path':'inset(0%)',ease:'none', duration:'1'},0);

                    gsap.timeline({
                        scrollTrigger : {
                            trigger : imgBox,
                            containerAnimation: scrollTween,
                            start : 'center center',
                            end : 'center left',
                            scrub: true,
                            //markers:true
                        }
                    })
                    .to(imgBox, {'clip-path':'inset(30%)',ease:'none', duration:'1'},0)

                });

                textBoxRefs.current.forEach(textBox => {
                    gsap.timeline({
                        scrollTrigger: {
                            trigger: textBox,
                            containerAnimation: scrollTween,
                            start: 'center 70%',
                            end: 'center 40%',
                            scrub: true,
                        }
                    })
                    .to(textBox, { 'opacity': '1', 'x': '-100' }, 0);

                    gsap.timeline({
                        scrollTrigger: {
                            trigger: textBox,
                            containerAnimation: scrollTween,
                            start: 'center 30%',
                            end: 'center 20%',
                            scrub: true,
                        }
                    })
                    .to(textBox, { 'opacity': '0' }, 0);
                });

                numRefs.current.forEach((text, index) => {
                    let num = text.getAttribute('data-text');

                    ScrollTrigger.create({
                        trigger: text,
                        start: '0% center',
                        end: '100% center',
                        scrub: true,
                        containerAnimation: scrollTween,
                        onEnter: self => { counterRef.current.innerText = num; console.log(self); }, // `onEnter`: 스크롤이 트리거 지점을 지나 앞으로 이동할 때 실행됩니다.
                        onEnterBack: () => { counterRef.current.innerText = num; }, // `onEnterBack`: 스크롤이 트리거 지점을 지나 뒤로 이동할 때 실행됩니다.
                    });
                });
                // gsap.utils.toArray('.work ul li .textBox').forEach(textBox => {
                //     gsap.timeline({
                //         scrollTrigger : {
                //             trigger : textBox,
                //             containerAnimation: scrollTween, 
                //             start : 'center 70%',
                //             end : 'center 40%',
                //             scrub: true,
                //             //markers:true
                //         }
                //     })
                //     .to(textBox, {'opacity':'1','x':'-100'},0);

                //     gsap.timeline({
                //         scrollTrigger : {
                //             trigger : textBox,
                //             containerAnimation: scrollTween,
                //             start : 'center 30%',
                //             end : 'center 20%',
                //             scrub: true,
                //             //markers:true
                //         }
                //     })
                //     .to(textBox, {'opacity':'0'},0);

                    

                //     gsap.utils.toArray('.num').forEach(function(text){
                //         let num =text.getAttribute('data-text');
                //         let counter = document.querySelector('.counter .now');

                //         ScrollTrigger.create({
                //             trigger:text,
                //             start:'0% center',
                //             end :'100% center',
                //             scrub:true,
                //             containerAnimation:scrollTween,
                //             onEnter : self => {counter.innerText = num;console.log(self);}, //스크롤의 위치가 start를 지나 앞으로 이동할때 self : window 자신
                //             onEnterBack : () => counter.innerText = num, //스크롤의 위치가 end를 지나 뒤로 이동할때 self : window 자신
                //             // markers:true
                //         })
                //     })
                // });    
            }
        })
        return () => {
            // Clean up ScrollTrigger instances 왜인지 이코드를 안넣으면 실행이 안됨
            /*
                ScrollTrigger.getAll(): 현재 페이지에 존재하는 모든 ScrollTrigger 인스턴스를 배열로 반환합니다.
                forEach(trigger => trigger.kill()): 반환된 배열의 각 ScrollTrigger 인스턴스에 대해 kill() 메서드를 호출하여 해당 인스턴스를 제거합니다. 이는 메모리 누수를 방지하고, 컴포넌트가 언마운트될 때 ScrollTrigger가 계속 작동하지 않도록 하기 위해 사용됩니다.


                ScrollTrigger 인스턴스를 제거해야 하는 이유는 주로 다음과 같은 상황에서 발생합니다:
                컴포넌트 재마운트: 컴포넌트가 여러 번 마운트되고 언마운트될 때, 기존의 ScrollTrigger 인스턴스가 남아 있으면 새로운 인스턴스와 충돌할 수 있습니다. 이는 특히 useEffect 훅을 사용하는 경우에 발생할 수 있습니다.
                메모리 누수 방지: ScrollTrigger 인스턴스가 제거되지 않으면 메모리 누수가 발생할 수 있습니다. 이는 성능 저하를 일으킬 수 있습니다.
                3. 반응형 디자인: 반응형 디자인을 구현할 때, 화면 크기나 방향이 변경될 때마다 ScrollTrigger 설정을 다시 해야 할 필요가 있습니다. 이 경우 기존 인스턴스를 제거하고 새로 설정하는 것이 필요합니다.
                Step04와 Step06의 차이점
                Step04: 이 컴포넌트에서는 ScrollTrigger 인스턴스가 한 번만 설정되고, 컴포넌트가 언마운트될 때 특별히 제거할 필요가 없었을 수 있습니다.
                Step06: 이 컴포넌트에서는 반응형 설정(ScrollTrigger.matchMedia)을 사용하고 있으며, 여러 개의 ScrollTrigger 인스턴스가 생성됩니다. 따라서 컴포넌트가 언마운트될 때 모든 인스턴스를 명시적으로 제거해야 합니다.
                            
                */
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    },[]);
  return (
    <section ref={triggerRef} className='h-dvh border-4 border-red-500 relative overflow-hidden bg-black text-white'>
        <div className='absolute text-8xl right-10 bottom-10 text-white'>
        <span ref={counterRef}></span>
                <span>/ 6</span>
        </div>
        <ul className='flex px-[30%] box-border'>
            {['work1.jpg', 'work2.jpg', 'work3.jpg', 'work4.jpg', 'work5.jpg', 'work6.jpg'].map((src, index) => (
                <li
                    key={index}
                    ref={el => listRefs.current[index] = el}
                    className='w-[700px] p-[100px] box-border flex-shrink-0'
                >
                    <a className='block w-full relative' href="/">
                        <div className='num' data-text={index + 1} ref={el => numRefs.current[index] = el}></div>
                        <div className='relative imgBox' ref={el => imgBoxRefs.current[index] = el}>
                            <img className='w-full' src={src} alt="" />
                        </div>
                        <div className='absolute left-0 bottom-10 opacity-0' ref={el => textBoxRefs.current[index] = el}>
                            <p className='text-6xl'>Site Name</p>
                            <p className='text-xl'>UI/UX Design, Web Publising</p>
                        </div>
                    </a>
                </li>
            ))}
        </ul>
    </section>
  )
}

export default Step06



// import React, { useEffect } from 'react'
// import gsap from 'gsap';
// import { useRef } from 'react';
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// const Step06 = () => {
//     gsap.registerPlugin(ScrollTrigger);
//     const triggerRef = useRef(null);
//     const listRefs = useRef([]);

//     useEffect(() => {
//         let list = listRefs.current;
//         let scrollTween = gsap.to(list, {
//             xPercent: -100 * (list.length - 1), // 원래 리스트의 개수보다 1을 빼서 길이를 구한후에 가로로 이동
//             ease: 'none',
//             scrollTrigger: {
//                 trigger: triggerRef.current,
//                 pin: true,
//                 scrub: 1,
//                 start: 'top top',
//                 end: () => `+=${triggerRef.current.offsetWidth}`, // 가로 스크롤 길이 설정
//                 markers: true
//             }
//         });

//         return () => {
//             // Clean up ScrollTrigger instances
//             ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//         };
//     }, []);
//   return (
//     <section className='h-[300vh] border-4 border-red-500 relative overflow-hidden bg-black text-white'>
//             <ul ref={triggerRef} className='flex px-[30%] box-border'>
//                 {['work1.jpg', 'work2.jpg', 'work3.jpg', 'work4.jpg', 'work5.jpg', 'work6.jpg'].map((src, index) => (
//                     <li
//                         key={index}
//                         ref={el => listRefs.current[index] = el}
//                         className='w-[700px] p-[100px] box-border flex-shrink-0'
//                     >
//                         <a className='block w-full relative' href="/">
//                             <div className='relative imgBox'>
//                                 <img className='w-full' src={src} alt="" />
//                             </div>
//                             <div className='absolute left-0 bottom-10 opacity-0'>
//                                 <p className='text-6xl'>Site Name</p>
//                                 <p className='text-xl'>UI/UX Design, Web Publising</p>
//                             </div>
//                         </a>
//                     </li>
//                 ))}
//             </ul>
//         </section>
//   )
// }

// export default Step06