
// Dependencies
import SVG from 'react-inlinesvg'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'

// Store
import { INDEX_PANEL_TRANSITION_DURATION } from 'store/constants'

// Utils
import { indexPanelAnimations } from 'utils'

// Components
import { BgImage } from 'components/ui'

// Component
export default function Cover ({ active }) {
  const sectionClass = useRef('page__index__cover')
  const [ animationState, setAnimationState ] = useState('initial')
  const [ isMobile, setIsMobile ] = useState(false)
  const { locale } = useSelector( state => state )

  //
  useEffect( () => {
    const isActive = active === sectionClass.current

    if ( isActive ) {
      const delay = animationState === 'initial' ? 2500 : 0
      setTimeout( () => setAnimationState('enter'), delay )
    }

    if ( !isActive ) setAnimationState('exit')

  }, [ active ])

  //
  useEffect( () => {
    const onResize = () => {
      if ( window.innerWidth < 767 && !isMobile ) setIsMobile(true)
      if ( window.innerWidth > 767 && isMobile ) setIsMobile(false)
    }
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [ isMobile ])

  //
  return (
    <motion.section className={ sectionClass.current } data-active={ active === sectionClass.current } initial="initial" enter="enter" exit="exit" animate={ animationState } variants={{
      initial : { opacity : 0 },
      enter : { opacity : 1, transition : { duration : INDEX_PANEL_TRANSITION_DURATION, delay : 0.5 }},
      exit : { opacity : 0, transition : { duration : INDEX_PANEL_TRANSITION_DURATION, delay : 0.5 }}
    }}>

      <motion.div className="bg-animation" initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.bgAnimation }>
        <video src={ isMobile ? `${process.env.BASE_PATH}/vid/cover-loop-mobile.mp4` : `${process.env.BASE_PATH}/vid/cover-loop-desktop.mp4` } autoPlay muted playsInline loop />
      </motion.div>

      <div className="left-column">
        <motion.h1 dangerouslySetInnerHTML={{ __html : locale.index.cover.title }} initial="initial" enter="enter" exit="exit" animate={ animationState } variants={{
          initial : { opacity : 1, y : 100 },
          enter : { opacity : 1, y : 0, transition : { duration : INDEX_PANEL_TRANSITION_DURATION, delay : 0.7 }},
          exit : { opacity : 0, y : -100, transition : { duration : INDEX_PANEL_TRANSITION_DURATION }}
        }}>

        </motion.h1>
      </div>

      <motion.div className="floorplans" initial="initial" enter="enter" exit="exit" animate={ animationState } variants={{
        initial : { opacity : 0, y : 100 },
        enter : { opacity : 1, y : 0, transition : { duration : INDEX_PANEL_TRANSITION_DURATION, delay : 0.5 }},
        exit : { opacity : 0, y : -100, transition : { duration : INDEX_PANEL_TRANSITION_DURATION, delay : 0.2 }}
      }}>
        <span className="section-title">{ locale.index.cover.ad_title }</span>

        <figure>
          <img src={ `${process.env.BASE_PATH}/img/index/image2.jpg` } />
        </figure>

        <p className="description">{ locale.index.cover.ad_copy }</p>

        {/*
          <div className="stat">
            <div className="left">
              <span className="title">Studios</span>
              <div className="progress"><span style={{ width : '40%' }}></span></div>
            </div>
            <div className="right">
              <span className="number">46</span>
            </div>
          </div>

          <div className="stat">
            <div className="left">
              <span className="title">One Bedrooms</span>
              <div className="progress"><span style={{ width : '60%' }}></span></div>
            </div>
            <div className="right">
              <span className="number">69</span>
            </div>
          </div>

          <div className="stat">
            <div className="left">
              <span className="title">Two Bedrooms</span>
              <div className="progress"><span style={{ width : '60%' }}></span></div>
            </div>
            <div className="right">
              <span className="number">69</span>
            </div>
          </div>

          <div className="stat">
            <div className="left">
              <span className="title">Penthouses</span>
              <div className="progress"><span style={{ width : '10%' }}></span></div>
            </div>
            <div className="right">
              <span className="number">4&nbsp;</span>
            </div>
          </div>

          <div className="stat">
            <div className="left">
              <span className="title">Townhomes</span>
              <div className="progress"><span style={{ width : '10%' }}></span></div>
            </div>
            <div className="right">
              <span className="number">5&nbsp;</span>
            </div>
          </div>
        */}
      </motion.div>

      <div className="icon-scroll">
        <div className="icon-arrows">
          <span></span>
        </div>
      </div>


    </motion.section>
  )
}
