
// Dependencies
import SVG from 'react-inlinesvg'
import { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'

// Store
import { uiUpdateHeaderTheme } from 'store/actions'
import { UI_HEADER_THEME_BLUE } from 'store/constants'

// Components
import { Seo } from 'components/common'

//
const homes = [
  {
    name : 'A',
    type : '1 Bedroom + 1 Bath',
    image : '/svg/plans/A.svg',
    area : {
      total : 669,
      interior : 537,
      outdoor : 132
    }
  },
  {
    name : 'A1',
    type : '1 Bedroom + 1 Bath',
    image : '/svg/plans/A1.svg',
    area : {
      total : 755,
      interior : 634,
      outdoor : 121
    }
  },
  {
    name : 'B',
    type : '1 Bedroom + 1 Bath',
    image : '/svg/plans/B.svg',
    area : {
      total : 723,
      interior : 646,
      outdoor : 77
    }
  },
  {
    name : 'C',
    type : '2 Bedroom + 2 Bath',
    image : '/svg/plans/C.svg',
    area : {
      total : 1003,
      interior : 776,
      outdoor : 227
    }
  },
  {
    name : 'C1',
    type : '2 Bedroom + 2 Bath',
    image : '/svg/plans/C1.svg',
    area : {
      total : 955,
      interior : 781,
      outdoor : 174
    }
  }
]

// Component
export default function Homes () {
  const dispatch = useDispatch()
  const levelLabel = useRef(null)

  //
  const onMouseEnter = e => {
    const y = e.offsetY
    const group = e.currentTarget
    const num = group.id.replace('L', '')

    levelLabel.current.innerText = `Level ${num}`
    levelLabel.current.style = `top:${y}px`
  }

  //
  const onElevationSvgLoaded = () => {
    const levelGroups = [...document.querySelectorAll('.elevation-view svg g[id^="L"]')]
    levelGroups.forEach( group => group.addEventListener('mouseenter', onMouseEnter) )
  }

  //
  useEffect( () => {
    dispatch(uiUpdateHeaderTheme(UI_HEADER_THEME_BLUE))
  }, [])

  //
  return (
    <>
      <Seo title="Homes" />

      <main className="page__homes">
        <div className="wrap--reg wrap--flex">

          <aside>
            <figure className="elevation-view">
              <SVG src="/svg/plans/Elevation-East-View.svg" onLoad={ onElevationSvgLoaded } />
              <span className="elevation-label">East Elevation</span>
              <span className="level-label" ref={ levelLabel }></span>
            </figure>

            <figure className="floor-plate">
              <SVG src="/svg/plans/Key-Plan-A.svg" />
            </figure>
          </aside>

          <div className="grid">
            {
              homes.map(( home, i ) => (
                <div className="grid__item" key={ i }>
                  <div className="unit-info">
                    <span className="unit-name">{ home.name }</span>
                    <span className="unit-type">{ home.type }</span>
                  </div>

                  <figure>
                    <img src={ home.image } />
                  </figure>

                  <div className="areas">
                    <span className="area area--total">Total Living { home.area.total } SF</span>
                    <span className="area area--interior">Interior { home.area.interior } SF</span>
                    <span className="area area--outdoor">Outdoor { home.area.outdoor } SF</span>
                  </div>
                </div>
              ))
            }
          </div>

        </div>
      </main>
    </>
  )
}
