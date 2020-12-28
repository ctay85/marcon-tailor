
// Dependencies
import { useState } from 'react'

//
export function AccordionItem ({ title, children }) {
  const [ isOpen, setIsOpen ] = useState(false)

  return (
    <div className="accordion__item" data-open={ isOpen }>
      <div className="accordion__item__header" onClick={ () => setIsOpen(!isOpen) }>
        <span>{ title }</span>
      </div>

      <div className="accordion__item__content">
        { children }
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
