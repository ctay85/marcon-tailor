
// Dependencies
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

// Utils
import { indexPanelAnimations } from 'utils'

// Components
import { BgImage } from 'components/ui'

// Component
export default function Interiors ({ active }) {
  const sectionClass = useRef('page__index__interiors')
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
        <BgImage src="/img/index/image3.jpg" />
      </motion.div>

      <article>
        <motion.span className="panel-name" initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.panelName }>Interiors</motion.span>

        <motion.h2 className="panel-tagline" initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.panelTagline }>More Space.</motion.h2>

        <motion.p className="panel-description" initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.panelDescription }>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</motion.p>

        <motion.button className="btn__more" initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.btnMore }>
          <i className="material-icons">add</i>
          <span>More on the interiors</span>
        </motion.button>
      </article>
    </motion.section>
  )
}
