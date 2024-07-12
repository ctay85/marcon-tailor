
// Dependencies
import { useState, useRef } from 'react'
import SVG from 'react-inlinesvg'

//
export function AccordionItem ({ title, children }) {
  const contentWrap = useRef(null)
  const content = useRef(null)
  const [ isOpen, setIsOpen ] = useState(false)

  //
  const setHeight = () => content.current.style.height = `${contentWrap.current.clientHeight}px`

  //
  const removeHeight = () => content.current.removeAttribute('style')

  //
  const toggleAccordion = () => {
    setHeight()

    if ( isOpen ) {
      setTimeout( () => {
        removeHeight()
        setIsOpen(false)
      }, 10)
    } else {
      setTimeout( () => {
        setIsOpen(true)
        removeHeight()
      }, 500)
    }
  }

  return (
    <div className="accordion__item" data-open={ isOpen }>
      <div className="accordion__item__header" onClick={ toggleAccordion }>
        <span>{ title }</span>
        <SVG src={`${process.env.BASE_PATH}/svg/thin-arrow-down.svg`} />
      </div>

      <div className="accordion__item__content" ref={ content }>
        <div className="accordion__item__content__wrap" ref={ contentWrap }>
          { children }
        </div>
      </div>
    </div>
  )
}

//
export function Accordion ({ children }) {
  return (
    <div className="accordion">
      { children }
    </div>
  )
}
