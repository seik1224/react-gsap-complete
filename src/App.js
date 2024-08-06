import './App.css';
import Step01 from './gsap/step01';
import Step02 from './gsap/step02';
import Step03 from './gsap/step03';
import Step04 from './gsap/step04';
import Step05 from './gsap/step05';
import Step06 from './gsap/step06';
import Step07 from './gsap/step07';
import Step08 from './gsap/step08';
import Step09 from './gsap/step09';

function App() {
  return (
    <>
      <section className='h-dvh bg-black text-white flex justify-center items-center border-4 border-red-600'>
        <div className='text-8xl uppercase leading-tight'>
          <span className='text-transparent block' style={{WebkitTextStroke:'2px #b1dd40'}}>GSAP</span>
          ScrollTrigger
        </div>
      </section>
      <Step01 />
      <Step02 />
      <Step03 />
      <Step04 />
      <Step05 />
      <Step06 />
      <Step07 />
      <Step08 />
      <Step09 />
      <section className='h-dvh bg-black text-white flex justify-center items-center border-4 border-red-600'>
        <div className='text-8xl uppercase leading-tight'>
          Footer
        </div>
      </section>
    </>
  );
}

export default App;
