import React, { useRef } from 'react'
import { chipImg, frameVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animations';

const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from('#chip', {
      scrollTrigger: {
        trigger: '#chip',
        start: '20% bottom'
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: 'power2.inOut'
    })

    animateWithGsap('.g_fadeIn', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut'
    })
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="flex-center w-full my-20">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            FFR.
            <br /> A Game Changer In Facial Analysis.
          </h2>

          <p className="hiw-subtitle">
            Watch Our 
          </p>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="w-full max-w-[800px] rounded-2xl overflow-hidden">
              <video 
                className="w-full h-full object-cover pointer-events-none" 
                playsInline 
                preload="none" 
                muted 
                autoPlay 
                ref={videoRef}
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <p className="text-gray font-semibold text-center mt-3">LookSci: Trailer</p>
        </div>

        <div className="hiw-text-container">
          <div className="flex flex-1 justify-center flex-col">
            <p className="hiw-text g_fadeIn">
              Dive into the science behind beauty {' '}
              <span className="text-white">
                Empowering you to make the best decisions for your face.
              </span>.
            </p>

            <p className="hiw-text g_fadeIn">
              Never {' '}
              <span className="text-white">
                look back into the past insecurities
              </span>,
              step into the future of beauty.
            </p>
          </div>

          <div className="flex-1 flex justify-center flex-col g_fadeIn">
            <p className="hiw-text">New</p>
            <p className="hiw-bigtext">Accurate</p>
            <p className="hiw-text">Interactive</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks