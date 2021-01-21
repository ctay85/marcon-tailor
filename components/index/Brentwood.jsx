
// Dependencies
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import SVG from 'react-inlinesvg'

// Utils
import { indexPanelAnimations } from 'utils'

// Store
import { INDEX_OVERLAY_KEY_BRENTWOOD } from 'store/constants'

// Components
import { BgImage } from 'components/ui'

// Component
export default function Brendwood ({ active, setActiveOverlayKey }) {
  const sectionClass = useRef('page__index__brentwood')
  const [ animationState, setAnimationState ] = useState('initial')
  const [ isMobile, setIsMobile ] = useState(false)

  //
  useEffect( () => {
    const isActive = active === sectionClass.current
    if ( isActive ) setAnimationState('enter')
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
    <motion.section className={ sectionClass.current } data-panel-trigger="true" data-active={ active === sectionClass.current } initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.container }>
      <motion.div className="bg-animation" initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.bgAnimation }>
        <BgImage src={ isMobile ? '/img/index/tailor-aerial-01-1080x1920.png' : '/img/index/19067_Marcon_TailorAerial_AerialL01_st.jpg' } />
      </motion.div>

      <article>
        <motion.span className="panel-name" initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.panelName }><span>Brentwood</span> &mdash; Celebrate More</motion.span>

        <motion.p className="panel-description" initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.panelDescription }>The homes at Tailor offer more than Brentwood has ever seen, built for life by Marcon.</motion.p>
      </article>

      <div className="mobile-tap-indicator"><span>Learn More</span></div>

      <motion.button className="desktop-click-indicator" onClick={ () => setActiveOverlayKey(INDEX_OVERLAY_KEY_BRENTWOOD) } initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.indicator }>
        <span>More</span>
        <SVG src="/svg/thin-arrow-down.svg" />
      </motion.button>
    </motion.section>
  )
}
