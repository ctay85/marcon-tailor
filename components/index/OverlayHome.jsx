
//
import { Overlay } from 'components/index'

//
export default function OverlayHome (props) {
  const { activeHome } = props
  console.log(activeHome);
  return (
    <Overlay {...props}>
      <div className="home-detail">

        <div className="column__left">
          <div className="content">
            <span className="unit-name">{ activeHome.name }</span>
            <span className="unit-type">{ activeHome.type }</span>

            <div className="areas">
              <span className="areas__interior">Interior Area: { activeHome.area.interior } SF</span>
              <span className="areas__exterior">Exterior Area: { activeHome.area.outdoor } SF</span>
              <span className="areas__total">Total Area: { activeHome.area.total } SF</span>
            </div>

            <a href={ activeHome.pdf } className="btn btn--solid" target="_blank" rel="noreferrer noopener">Download PDF</a>
          </div>
        </div>

        <div className="column__right">
          <div className="view"></div>

          <div className="image">
            <img src={ activeHome.image } />
          </div>
        </div>

      </div>
    </Overlay>
  )
}
