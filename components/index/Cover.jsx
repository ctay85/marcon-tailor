
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
    const duration = window.innerHeight * 3
    const [ h1, h2 ] = header.current.children[0].children
    const ScrollTrigger = require('gsap/ScrollTrigger').default
    const scrollTriggerDefaults = { trigger : cover.current, start : 0, scrub : 1 }
    const imageTLStep2 = { height : '100vh', y : 0, onComplete : () => setActiveImageIndex(2), onReverseComplete : () => setActiveImageIndex(0) }
    const imageTlStep3 = { width : '100vw', onReverseComplete : () => setActiveImageIndex(1) }

    //
    gsap.registerPlugin(ScrollTrigger)

    //
    ScrollTrigger.matchMedia({

      // Portrait Screens
      "(max-width:1023px)" : () => {
        gsap.timeline({ scrollTrigger : { ...scrollTriggerDefaults, end : () => `+=${duration}` }})
          .to( motionContainer.current, { width : '80vw', height : '70vh', onComplete : () => setActiveImageIndex(1) })
          .to( motionContainer.current, imageTLStep2)
          .to( motionContainer.current, imageTlStep3)
      },

      // Desktop screens
      "(min-width:1024px)" : () => {
        gsap.timeline({ scrollTrigger : { ...scrollTriggerDefaults, end : () => `+=${duration}` }})
          .to( motionContainer.current, { width : '35vw', height : '80vh', onComplete : () => setActiveImageIndex(1) })
          .to( motionContainer.current, imageTLStep2)
          .to( motionContainer.current, imageTlStep3)
      },

      // Global
      "all" : () => {
        gsap.timeline({ scrollTrigger : { ...scrollTriggerDefaults, end : () => `+=${window.innerHeight}` }})
          .to( h1, { y : '-90px', opacity : 0 }, 0 )
          .to( h2, { y : '-80px', opacity : 0 }, 0 )
      }

    })

    //
    ScrollTrigger.update()

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  //
  return (
    <section className="page__index__cover" ref={ cover }>
      <div className="bg-image background" style={{ backgroundImage : `url(${process.env.BASE_PATH}/img/index/index-cover-bg.jpg)` }}></div>

      <header ref={ header }>
        <div className="wrap--reg">
          <h1>Celebrate More in Brentwood</h1>
          <h2>Homes starting from the low-400’s</h2>
        </div>
      </header>

      <div ref={ motionContainer } className="motion-container">
        <div
          className="bg-image"
          data-active={ activeImageIndex === 0 }
        >
          <video src={ `${process.env.BASE_PATH}/vid/TailorGraphicsGirl1080x1080Loop.mp4` } autoPlay muted playsInline loop></video>
        </div>

        <div
          className="bg-image"
          style={{ backgroundImage : `url(${process.env.BASE_PATH}/img/index/B&TB_MARCON_TAILOR_DUSK_UP_FINAL_2400x3199.jpg)` }}
          data-active={ activeImageIndex === 1 }
        ></div>

        <div
          className="bg-image"
          style={{ backgroundImage : `url(${process.env.BASE_PATH}/img/index/B&TB_MARCON_TAILOR_INT_LOBBY_HALL_NEW_FINAL_1920x1920.jpg)` }}
          data-active={ activeImageIndex === 2 }
        ></div>
      </div>

      <svg className="icon-scroll" viewBox="0 0 50 50">
        <line x1="25" x2="25" y1="0" y2="50" />
        <line x1="5" x2="25" y1="30" y2="50" />
        <line x1="45" x2="25" y1="30" y2="50" />
      </svg>
    </section>
  )
}

// Export
export default Cover
