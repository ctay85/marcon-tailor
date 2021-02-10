
// Dependencies
import { useState, useEffect } from 'react'

// Data
import { unitData } from 'data'

// Components
import { Overlay } from 'components/index'

// Component
export default function OverlayHome (props) {
  const { activeHome } = props
  const [ unit, setUnit ] = useState({
    name : '', type : '', image : '', pdf : '', unitNumber : '',
    area : { total : 0, interior : 0, outdoor : 0 }
  })

  //
  useEffect( () => {
    if ( !activeHome ) return
    const [ unitNumber, planType ] = activeHome
    const [ unit ] = unitData.filter( unit => unit.name === planType )

    setUnit({
      ...unit,
      unitNumber
    })
  }, [ activeHome ])

  //
  return (
    <Overlay {...props}>
      <div className="home-detail">
        <div className="column__left">
          <div className="content">
            <span className="unit-number">{ unit.unitNumber }</span>
            <span className="unit-type">{ unit.type }</span>
            <span className="unit-name">Plan Type: { unit.name }</span>

            <div className="areas">
              <span className="areas__interior">Interior Area: { unit.area.interior } SF</span>
              <span className="areas__exterior">Exterior Area: { unit.area.outdoor } SF</span>
              <span className="areas__total">Total Area: { unit.area.total } SF</span>
            </div>

            <a href={ `/rel/plans/${unit.pdf}` } className="btn btn--solid" target="_blank" rel="noreferrer noopener">Download PDF</a>
          </div>
        </div>

        <div className="column__right">
          <div className="view"></div>

          <div className="image">
            <img src={ `/rel/plans/${unit.image}` } />
          </div>
        </div>
      </div>
    </Overlay>
  )
}
