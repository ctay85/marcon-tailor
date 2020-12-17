
// Dependencies
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

// Utils
import { indexPanelAnimations } from 'utils'

// Components
import { BgImage } from 'components/ui'

// Component
export default function Brendwood ({ active }) {
  const sectionClass = useRef('page__index__brentwood')
  const [ animationState, setAnimationState ] = useState('initial')

  //
  useEffect( () => {
    const isActive = active === sectionClass.current
    if ( isActive ) setAnimationState('enter')
    if ( !isActive ) setAnimationState('exit')
  }, [ active ])

  //
  return (
    <motion.section className={ sectionClass.current } data-active={ active === sectionClass.current } initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.container }>
      <motion.div className="bg-animation" initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.bgAnimation }>
        <BgImage src="/img/index/19067_Marcon_TailorAerial_AerialL01_st.jpg" />
      </motion.div>

      <article>
        <motion.span className="panel-name" initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.panelName }>Brentwood</motion.span>

        <motion.h2 className="panel-tagline" initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.panelTagline }>Celebrate More.</motion.h2>

        <motion.p className="panel-description" initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.panelDescription }>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</motion.p>

        <motion.button className="btn__more" initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.btnMore }>
          <i className="material-icons">add</i>
          <span>More on brentwood</span>
        </motion.button>
      </article>
    </motion.section>
  )
}
