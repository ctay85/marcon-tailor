
// Dependencies
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

// Utils
import { indexPanelAnimations } from 'utils'

// Component
export default function Homes ({ active }) {
  const sectionClass = useRef('page__index__homes')
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
      <article>
        <motion.span className="panel-name" initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.panelName }>
          Homes
        </motion.span>

        <motion.h2 className="panel-tagline" initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.panelTagline }>
          More Intimate.
        </motion.h2>

        <motion.p className="panel-description" initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.panelDescription }>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </motion.p>

        <motion.div className="btn__more" initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.btnMore }>
          <Link href="/homes">
            <a>
              <i className="material-icons">add</i>
              <span>More on the homes</span>
            </a>
          </Link>
        </motion.div>
      </article>
    </motion.section>
  )
}
