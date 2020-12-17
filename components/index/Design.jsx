
// Dependencies
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

// Utils
import { indexPanelAnimations } from 'utils'

// Components
import { BgImage } from 'components/ui'

// Component
export default function Design ({ active }) {
  const sectionClass = useRef('page__index__design')
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
      <article className="text--blue">
        <motion.span className="panel-name" initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.panelName }>
          Design
        </motion.span>

        <motion.h2 className="panel-tagline" initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.panelTagline }>
          More Thought.
        </motion.h2>

        <motion.p className="panel-description" initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.panelDescription }>
          Designed by Shift Architecture, Tailor is a sleek, twenty-seven storey tower with a sculpted base.
        </motion.p>

        <motion.button className="btn__more" initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.btnMore }>
          <i className="material-icons">add</i>
          <span>More on the design</span>
        </motion.button>
      </article>

      <figure>
        <motion.div className="blind" initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.blind }></motion.div>
        <BgImage src="/img/index/B&TB_MARCON_TAILOR_LOBBY_ENTRANCE_FINAL_2400x2400.jpg" />
      </figure>
    </motion.section>
  )
}
