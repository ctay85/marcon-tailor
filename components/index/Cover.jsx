
// Dependencies
import Image from 'next/image'
import SVG from 'react-inlinesvg'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

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

  //
  useEffect( () => {
    const isActive = active === sectionClass.current
    if ( isActive ) setAnimationState('enter')
    if ( !isActive ) setAnimationState('exit')
  }, [ active ])

  //
  return (
    <motion.section className={ sectionClass.current } data-active={ active === sectionClass.current } initial="initial" enter="enter" exit="exit" animate={ animationState } variants={{
      initial : { opacity : 0 },
      enter : { opacity : 1, transition : { duration : INDEX_PANEL_TRANSITION_DURATION, delay : 0.5 }},
      exit : { opacity : 0, transition : { duration : INDEX_PANEL_TRANSITION_DURATION, delay : 0.5 }}
    }}>
      <motion.div className="bg-animation" initial="initial" enter="enter" exit="exit" animate={ animationState } variants={ indexPanelAnimations.bgAnimation }>
        <BgImage src="/img/index/B&TB_MARCON_TAILOR_INT_LOBBY_HALL_NEW_FINAL_1920x1920.jpg" />
      </motion.div>

      <div className="left-column">
        <motion.nav initial="initial" enter="enter" exit="exit" animate={ animationState } variants={{
          initial : { opacity : 1, y : 100 },
          enter : { opacity : 1, y : 0, transition : { duration : INDEX_PANEL_TRANSITION_DURATION, delay : 0.7 }},
          exit : { opacity : 0, y : -100, transition : { duration : INDEX_PANEL_TRANSITION_DURATION }}
        }}>
          <button>Design</button>
          <button>Homes</button>
          <button>Interiors</button>
          <button>Public Art</button>
          <button>Brentwood</button>
        </motion.nav>

        <motion.button className="btn__enquire" initial="initial" enter="enter" exit="exit" animate={ animationState } variants={{
          initial : { opacity : 0, y : 100 },
          enter : { opacity : 1, y : 0, transition : { duration : INDEX_PANEL_TRANSITION_DURATION, delay : 0.6 }},
          exit : { opacity : 0, y : -100, transition : { duration : INDEX_PANEL_TRANSITION_DURATION, delay : 0.1 }}
        }}>
          <span>Enquire</span>
          <SVG src="/svg/thin-arrow-down.svg" />
        </motion.button>
      </div>

      <motion.div className="floorplans" initial="initial" enter="enter" exit="exit" animate={ animationState } variants={{
        initial : { opacity : 0, y : 100 },
        enter : { opacity : 1, y : 0, transition : { duration : INDEX_PANEL_TRANSITION_DURATION, delay : 0.5 }},
        exit : { opacity : 0, y : -100, transition : { duration : INDEX_PANEL_TRANSITION_DURATION, delay : 0.2 }}
      }}>
        <span className="section-title">Floorplans</span>

        <figure>
          <Image src="/img/index/image2.jpg" width="343" height="154" />
        </figure>

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
      </motion.div>

    </motion.section>
  )
}
