
// Dependencies
import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'

// Component
export default function Cover () {
  const h1 = useRef(null)
  const video = useRef(null)

  //
  useEffect( () => {
    const ScrollTrigger = require('gsap/ScrollTrigger').default
    gsap.registerPlugin(ScrollTrigger)

    const timeline = gsap.timeline({
      scrollTrigger : {
        trigger : document.documentElement,
        start : 0,
        scrub : 1,
        end : () => `+=${window.innerHeight}`
      }
    })

    timeline
      .to( h1.current, { y : '-100px', opacity : 0 }, 0)
      .to( video.current, { opacity : 0 }, 0)

  }, [])

  //
  return (
    <section className="page__index__cover">
      <video ref={ video } src={ `${process.env.BASE_PATH}/vid/lobby-exterior-loop.mp4` } autoPlay muted playsInline loop></video>

      <h1 ref={ h1 }>Celebrate More in Brentwood</h1>

      <svg className="icon-scroll" viewBox="0 0 50 50">
        <line x1="25" x2="25" y1="0" y2="50" />
        <line x1="5" x2="25" y1="30" y2="50" />
        <line x1="45" x2="25" y1="30" y2="50" />
      </svg>
    </section>
  )
}
