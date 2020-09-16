
//
import { useEffect, useRef, useState } from 'react'
import lottie from 'lottie-web'

//
const Intro = () => {
  const bmContainer = useRef(null)
  const [ state, setState ] = useState({ visible : true, faded : false })

  //
  const onComplete = () => {
    setState({ visible : true, faded : true })
    setTimeout( () => setState({ visible : false, faded : true }), 1000)
  }

  //
  const setupLottieAnimation = () => {
    const anim = lottie.loadAnimation({
      container: bmContainer.current,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      path : '/json/tailor-logo-v1.json'
    })

    anim.addEventListener('complete', onComplete)
  }

  //
  useEffect( () => {
    setupLottieAnimation()
  }, [])

  //
  return (
    <section className="page__index__intro" data-visible={ state.visible } data-faded={ state.faded }>
      <div className="bm-container" ref={ bmContainer }></div>
    </section>
  )
}

//
export default Intro
