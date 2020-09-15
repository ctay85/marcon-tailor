
// Dependencies
import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'

// Component
const Cover = () => {
  const cover = useRef(null)
  const motionContainer = useRef(null)
  const header = useRef(null)
  const [ activeImageIndex, setActiveImageIndex ] = useState(0)

  //
  useEffect( () => {

    //
    const ScrollTrigger = require('gsap/ScrollTrigger')
    gsap.registerPlugin(ScrollTrigger)

    //
    const duration = window.innerHeight * 3
    const [ h1, h2 ] = header.current.children


    //
    const globalElementsTimeline = gsap.timeline({
      paused : true,
      scrollTrigger : {
        trigger : cover.current,
        start : 'top top',
        end : `+=${window.innerHeight}`,
        scrub : 1
      }
    })

    globalElementsTimeline
      .to( h1, { y : '-50px', opacity : 0 }, 0 )
      .to( h2, { y : '-60px', opacity : 0, duration : 1.1 }, 0 )


    //
    const imageTimeline = gsap.timeline({
      paused : true,
      scrollTrigger : {
        trigger : cover.current,
        start : 'top top',
        end : `+=${duration}`,
        scrub : 1
      }
    })

    imageTimeline
      .to( motionContainer.current, {
        width : '35vw',
        height : '80vh',
        onComplete : () => setActiveImageIndex(1)
      })
      .to( motionContainer.current, {
        height : '100vh',
        y : 0,
        onComplete : () => setActiveImageIndex(2),
        onReverseComplete : () => setActiveImageIndex(0)
      })
      .to( motionContainer.current, {
        width : '100vw',
        onComplete : () => console.log("finished"),
        onReverseComplete : () => setActiveImageIndex(1)
      })

    return () => {
      setActiveImageIndex(0)
    }
  }, [])

  //
  return (
    <section className="page__index__cover" ref={ cover }>
      <div className="bg-image background"></div>

      <header ref={ header }>
        <h1>Celebrate More in Brentwood</h1>
        <h2>170 homes starting $606,000</h2>
      </header>

      <div ref={ motionContainer } className="motion-container">
        <div
          className="bg-image"
          style={{ backgroundImage : `url(/img/index/cover/1_Tailor_Graphics_Girl_01_2400x1601.jpg)` }}
          data-active={ activeImageIndex === 0 }
        ></div>

        <div
          className="bg-image"
          style={{ backgroundImage : `url(/img/index/cover/2_B&TB_MARCON_TAILOR_ARTWORK_NIGHT_FINAL_2400x2400.jpg)` }}
          data-active={ activeImageIndex === 1 }
        ></div>

        <div
          className="bg-image"
          style={{ backgroundImage : `url(/img/index/cover/3_200619-152_2400x1599.jpg)` }}
          data-active={ activeImageIndex === 2 }
        ></div>
      </div>
    </section>
  )
}

// Export
export default Cover
