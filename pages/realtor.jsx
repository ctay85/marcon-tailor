
// Dependencies
import { useState, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'

// Data
import { unitData } from 'data'

// Store
import { UI_HEADER_THEME_BLUE } from 'store/constants'
import { uiUpdateHeaderTheme } from 'store/actions'

// Components
import { Seo } from 'components/common'

//
const REALTOR_AUTHENTICATED = 'REALTOR_AUTHENTICATED'

// Component
export default function Realtor () {
  const dispatch = useDispatch()
  const password = useRef('alpha')
  const [ userAuthorized, setUserAuthorized ] = useState(false)

  //
  const onChange = ({ currentTarget : input }) => {
    const value = input.value.toLowerCase()

    if ( value === password.current ) {
      setUserAuthorized(true)
      localStorage.setItem(REALTOR_AUTHENTICATED, 'true')
    }
  }

  //
  useEffect( () => {
    const lsEntry = localStorage.getItem(REALTOR_AUTHENTICATED)

    if ( lsEntry && lsEntry === 'true' ) {
      setUserAuthorized(true)
    }

    dispatch(uiUpdateHeaderTheme(UI_HEADER_THEME_BLUE))
  }, [])

  //
  if ( !userAuthorized ) {
    return (
      <main className="page__realtor page__realtor__password">
        <div className="wrap--reg">
          <div className="section-intro">
            <h2>Welcome to the Tailor by Marcon – Exclusive Realtor Hub.</h2>

            <aside>
              <p>Enter your password to gain access.</p>
              <input type="password" name="password" placeholder="Enter Password" onChange={ onChange } />
            </aside>
          </div>
        </div>
      </main>
    )
  }

  //
  return (
    <>
      <Seo title="REALTOR Portal" />

      <main className="page__realtor">
        <div className="wrap--reg">


          <div className="section-intro">
            <h2>Welcome to the Tailor by Marcon – Exclusive Realtor Hub.</h2>

            <aside>
              <p className="text--display">Here you can find Tailor brand assets and sales program information that can be used for the promotion of this boutique <strong>twenty-seven storey tower comprised of 193 homes nestled in the heart of Brentwood.</strong></p>
              <p><em>Please be sure to review the Disclaimer for legal requirements pertaining to the use of all marketing renderings and materials provided.</em></p>
            </aside>
          </div>



          <figure className="hero-image">
            <div className="bg-image" style={{ backgroundImage : `url(${process.env.BASE_PATH}/rel/gallery/web/NEW_B&TB_MARCON_TAILOR_ARTWORK_NIGHT_FINAL.jpg)` }}></div>
          </figure>




          <div className="marketing">
            <div className="left">
              <h2>Marketing</h2>
              <p>
                Website &mdash; http://marcon.ca/tailor/
                <br />
                Exclusive Preview Package &mdash; <a href={ `${process.env.BASE_PATH}/rel/Tailor_by_Marcon_Preview_Package.pdf` } target="_blank">EN</a> | <a href={ `${process.env.BASE_PATH}/rel/Tailor_by_Marcon_Preview_Package-cn.pdf` } target="_blank">CN</a>
                <br />
                Logo &mdash; <a href="https://www.dropbox.com/sh/a45thjibeiz2xqn/AACjjQJVUvAm9pSVgLJCoob6a?dl=0" target="_blank">JPG</a> <a href="https://www.dropbox.com/sh/trxy2n71qmc9oom/AADqh4T1o1GmsPinnJcwbyBta?dl=0" target="_blank">PNG</a>
                <br />
                Font Preference &mdash; Americana or Aerial
              </p>

              <h3>Virtual Tours</h3>
              <ul>
                <li><a href="https://my.matterport.com/show/?m=BZomsgMLSaz&brand=0" target="_blank" rel="noopener noreferrer">1 Bedroom Suite</a></li>
                <li><a href="https://my.matterport.com/show/?m=aP15iiZWtLT&brand=0" target="_blank" rel="noopener noreferrer">2 Bedroom Suite</a></li>
              </ul>

              <h3>Taglines</h3>
              <ul>
                <li>A new perspective on intimate high-rise living in Brentwood</li>
                <li>Celebrate more in Brentwood. More Function. More Value. More Home</li>
                <li>Tailor. Made for Brentwood</li>
                <li>Tailored for finer living</li>
              </ul>

              <h3>Social Media (Feel free to tag @MarconHomes)</h3>
              <ul>
                <li>#CelebrateMoreinBrentwood</li>
                <li>#TailorByMarcon</li>
                <li>#MarconHomes</li>
                <li>#BuildingForLife</li>
              </ul>
            </div>

            <div className="right">
              <img src={ `${process.env.BASE_PATH}/rel/Tailor PC.jpeg` } />
              <img src={ `${process.env.BASE_PATH}/rel/Tailor_RIGHT TIME RIGHT PLACE.jpg` } />
            </div>
          </div>







          <h2>Gallery</h2>
          <div className="grid grid__gallery" rel="2">
            <a target="_blank" download href={ `${process.env.BASE_PATH}/rel/gallery/hires/B&TB_MARCON_TAILOR_DUSK_UP_FINAL.jpg` }>
              <img src={ `${process.env.BASE_PATH}/rel/gallery/web/B&TB_MARCON_TAILOR_DUSK_UP_FINAL.jpg` } />
            </a>
            <a target="_blank" download href={ `${process.env.BASE_PATH}/rel/gallery/hires/NEW_B&TB_MARCON_TAILOR_ARTWORK_NIGHT_FINAL.jpg` }>
              <img src={ `${process.env.BASE_PATH}/rel/gallery/web/NEW_B&TB_MARCON_TAILOR_ARTWORK_NIGHT_FINAL.jpg` } />
            </a>
            <a target="_blank" download href={ `${process.env.BASE_PATH}/rel/gallery/hires/B&TB_MARCON_TAILOR_LOBBY_CORNER_FINAL.jpg` }>
              <img src={ `${process.env.BASE_PATH}/rel/gallery/web/B&TB_MARCON_TAILOR_LOBBY_CORNER_FINAL.jpg` } />
            </a>
            <a target="_blank" download href={ `${process.env.BASE_PATH}/rel/gallery/hires/B&TB_MARCON_TAILOR_INT_LOBBY_HALL_NEW_PEOPLE_FINAL.jpg` }>
              <img src={ `${process.env.BASE_PATH}/rel/gallery/web/B&TB_MARCON_TAILOR_INT_LOBBY_HALL_NEW_PEOPLE_FINAL.jpg` } />
            </a>
          </div>





          <h2>Sales</h2>
          <h3>Sales are anticipated to commence in February 2021.</h3>
          <p>You can schedule a private appointment to the Tailor Sales Centre located at 2421 Alpha Avenue in Burnaby. Please connect with our Tailor Sales Team to schedule a private tour: Call <a href="tel:6042991001">604.299.1001</a> or by email: <a href="mail:sales@tailorbymarcon.ca">sales@tailorbymarcon.ca</a></p>

          <h3>Deposit Structure</h3>

          <p className="feature-box"><strong>Early purchasers will take advantage of a 15% total deposit for the first 75 homes sold.</strong></p>

          <div className="table">
            <ul>
              <li>Initial Deposit</li>
              <li>$10,000</li>
              <li>Due Upon Signing – By way of bank draft</li>
            </ul>
            <ul>
              <li>First Deposit</li>
              <li>5% (less Initial $10,000)</li>
              <li>Due before end of 7 day rescission period</li>
            </ul>
            <ul>
              <li>Second Deposit</li>
              <li>5%</li>
              <li>Due on filing of First Amendment</li>
            </ul>
            <ul>
              <li>Third Deposit</li>
              <li>5%</li>
              <li>Due 180 days after Second Deposit</li>
            </ul>
            <ul>
              <li>Fourth Deposit</li>
              <li>5%</li>
              <li>Due 180 days after Third Deposit</li>
            </ul>
          </div>

          <p><small>
            *Early purchasers will receive the fourth deposit struck out, providing a 15% total deposit<br />
            *Please note, foreign purchasers will be required to provide a total deposit of 20%
          </small></p>

          <br />
          <h3>Realtor Commissions & Incentives</h3>
          <p><strong>3% Flat Commissions paid 50/50</strong></p>
          <div className="table table__commissions">
            <ul>
              <li>1st Deal</li>
              <li>3 % Flat Commission</li>
            </ul>
            <ul>
              <li>2nd Deal</li>
              <li>3% Flat Commission</li>
            </ul>
            <ul>
              <li>3rd Deal</li>
              <li>3% Flat Commission +$3,000</li>
            </ul>
            <ul>
              <li>4th Deal</li>
              <li>3% Flat Commission +$4,000</li>
            </ul>
            <ul>
              <li>5th Deal</li>
              <li>3% Flat Commission +$5,000</li>
            </ul>
          </div>
          <p><small>*Bonussing is non-retroactive</small></p>

          <br />
          <h3>Purchaser Incentives</h3>
          <p><strong>We are pleased to reward our early purchasers with the following incentives:</strong></p>
          <div className="table table__incentives">
            <ul>
              <li>Studio</li>
              <li>$5,000</li>
            </ul>
            <ul>
              <li>Jr. 1 Bed</li>
              <li>$7,500</li>
            </ul>
            <ul>
              <li>1 Bed</li>
              <li>$7,500</li>
            </ul>
            <ul>
              <li>2 Bed</li>
              <li>$10,000</li>
            </ul>
            <ul>
              <li>3 Bed PH</li>
              <li>$30,000</li>
            </ul>
            <ul>
              <li>2 Bed TH</li>
              <li>$20,000</li>
            </ul>
          </div>

          <br />
          <h3>Starting Pricepoints</h3>
          <div className="table table__starting">
            <ul>
              <li>Studio Homes</li>
              <li>From Mid $300,000’s</li>
            </ul>
            <ul>
              <li>Junior 1 Bedroom Homes</li>
              <li>From High $400,000’s</li>
            </ul>
            <ul>
              <li>1 Bedroom Homes</li>
              <li>From Mid $500,000’s</li>
            </ul>
            <ul>
              <li>2 Bedroom Homes</li>
              <li>From Mid $700,000’s</li>
            </ul>
          </div>


          <br /><br />
          <h2>Floorplans</h2>
          <div className="grid grid__floorplans" rel="3">
            {
              unitData.map(( unit, i ) => (
                <div className="grid__item" key={ i }>
                  <div>
                    <span className="plan-type">{ unit.name }</span>
                    <span className="plan-style">{ unit.type }</span>

                    {
                      unit.images
                        ? <img src={ unit.images[0].file } />
                        : <img src={ unit.image } />
                    }
                  </div>

                  <div>
                    <span className="total-living"><strong>Total Living</strong> { unit.area.total } sf</span>
                    <span className="interior"><strong>Interior</strong> { unit.area.interior } sf</span>
                    <span className="outdoor"><strong>Outdoor</strong> { unit.area.outdoor } sf</span>

                    <a className="btn btn--solid" target="_blank" download href={ unit.pdf }>Download PDF</a>
                  </div>
                </div>
              ))
            }
          </div>

          <div className="book-btn">
            <a href="https://rennie.as.me/tailor" className="btn btn--solid btn__book-appointment" target="_blank">Book Appointment</a>
          </div>







          <h3>Disclaimer</h3>
          <p>The material provided herein is for general informational purposes only and is not intended to depict as-built construction designs or finishes. The Developer reserves the right in its sole discretion to make modifications or changes to building design, floor plans, project designs, specifications, finishes, features, incentives and dimensions, without prior notice.  Renderings and any depicted views are artistic concepts only.  Square footages are approximate and have been calculated from architectural drawings.  Actual final dimensions following completion of construction may vary from those set out herein. E.&O.E. Marcon Alpha (GP) Ltd. * Pricing, promotions and incentives are all subject to change without prior notice. Please see sales representative for details.</p>





        </div>
      </main>
    </>
  )
}
