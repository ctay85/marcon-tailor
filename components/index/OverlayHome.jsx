
// Dependencies
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import SVG from 'react-inlinesvg'

// Data
import { unitData } from 'data'

// Utils
import { getViewImage, getViewOffset } from 'utils'

// Components
import { Overlay } from 'components/index'
import { Panorama } from 'components/ui'

// Component
export default function OverlayHome (props) {
  const { activeHome } = props
  const [ unit, setUnit ] = useState({
    name : '', type : '', image : '', plate : '', pdf : '', unitNumber : '', view : '',
    area : { total : 0, interior : 0, outdoor : 0 }
  })

  //
  useEffect( () => {
    if ( !activeHome ) return
    const [ unitNumber, planType ] = activeHome
    const [ unit ] = unitData.filter( unit => unit.name === planType )
    const level = parseInt(unitNumber) > 1000 ? unitNumber.substring(0,2) : unitNumber.substring(0,1)
    const genericUnitNumber = parseInt(unitNumber) > 1000 ? unitNumber.substr(2,2) : unitNumber.substr(1,2)

    setUnit({
      ...unit,
      unitNumber,
      view : getViewImage(level),
      offset : getViewOffset(genericUnitNumber)
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
            <a href={ `${process.env.BASE_PATH}/pdf/P9_Tailor Feature Sheet_Aug20.pdf` } className="btn__feature-sheet" target="_blank" rel="noreferrer noopener">Feature Sheet</a>
          </div>
        </div>

        <div className="column__right">
          <Panorama unit={ unit } />

          <div className="image">
            { unit.image && <img className="plan" src={ unit.image } /> }
            {
              unit.images && unit.images.map(( image, i ) => (
                <div className="level" key={ i }>
                  <span className="image-caption">{ image.caption }</span>
                  <img className="plan" src={ image.file } />
                </div>
              ))
            }

            <img className="plate" src={ unit.plate } />
          </div>

          <p className="disclaimer">The Developer reserves the right in its sole discretion to make modifications or changes to building design, floor plans, project designs, specifications, finishes, features, incentives and dimensions, without prior notice. Renderings and any depicted views are artistic concepts only. Square footages are approximate and have been calculated from architectural drawings. Actual final dimensions following completion of construction may vary from those set out herein. E.&O.E. Marcon Alpha (GP) Ltd.</p>
        </div>
      </div>
    </Overlay>
  )
}
