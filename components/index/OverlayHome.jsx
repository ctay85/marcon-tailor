
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
    name : '', type : '', image : '', pdf : '', unitNumber : '', view : '',
    area : { total : 0, interior : 0, outdoor : 0 }
  })

  //
  const getViewImage = level => {
    switch ( level ) {
      case '3' :
      case '4' :
      case '5' :
        return '/img/views/Tailor_Panoramas_1_web.jpg'
      case '6' :
      case '7' :
      case '8' :
        return '/img/views/Tailor_Panoramas_2_web.jpg'
      case '9' :
      case '10' :
      case '11' :
        return '/img/views/Tailor_Panoramas_3_web.jpg'
      case '12' :
      case '13' :
      case '14' :
        return '/img/views/Tailor_Panoramas_4_web.jpg'
      case '15' :
      case '16' :
      case '17' :
        return '/img/views/Tailor_Panoramas_5_web.jpg'
      case '18' :
      case '19' :
      case '20' :
        return '/img/views/Tailor_Panoramas_6_web.jpg'
      case '21' :
      case '22' :
      case '23' :
        return '/img/views/Tailor_Panoramas_7_web.jpg'
      case '24' :
      case '25' :
      case '26' :
        return '/img/views/Tailor_Panoramas_8_web.jpg'
      case '27' :
        return '/img/views/Tailor_Panoramas_9_web.jpg'
    }
  }

  //
  useEffect( () => {
    if ( !activeHome ) return
    const [ unitNumber, planType ] = activeHome
    const [ unit ] = unitData.filter( unit => unit.name === planType )
    const level = parseInt(unitNumber) > 1000 ? unitNumber.substring(0,2) : unitNumber.substring(0,1)

    setUnit({
      ...unit,
      unitNumber,
      view : getViewImage(level)
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

            <a href={ `${unit.pdf}` } className="btn btn--solid" target="_blank" rel="noreferrer noopener">Download PDF</a>
          </div>
        </div>

        <div className="column__right">
          <div className="view" style={{ backgroundImage : `url(${unit.view})` }}></div>

          <div className="image">
            <img src={ `${unit.image}` } />
          </div>
        </div>
      </div>
    </Overlay>
  )
}
