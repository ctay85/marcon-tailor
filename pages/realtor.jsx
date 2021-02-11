
// Dependencies
import { useState, useRef, useEffect } from 'react'

// Components
import { Seo } from 'components/common'

//
const REALTOR_AUTHENTICATED = 'REALTOR_AUTHENTICATED'

// Component
export default function Realtor () {
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
            <div className="grid__item">
              <div>
                <span className="plan-type">A</span>
                <span className="plan-style">1 Bedroom + 1 Bath</span>
                <img src={ `${process.env.BASE_PATH}/rel/plans/Plan-A.svg` } />
              </div>

              <div>
                <span className="total-living"><strong>Total Living</strong> 670 sf</span>
                <span className="interior"><strong>Interior</strong> 538 sf</span>
                <span className="outdoor"><strong>Outdoor</strong> 132 sf</span>

                <a className="btn btn--solid" target="_blank" download href={ `${process.env.BASE_PATH}/rel/plans/Tailor_Floorplans_Sheets_A.pdf` }>Download PDF</a>
              </div>
            </div>

            <div className="grid__item">
              <div>
                <span className="plan-type">A1</span>
                <span className="plan-style">1 Bedroom + 1 Bath</span>
                <img src={ `${process.env.BASE_PATH}/rel/plans/Plan-A1.svg` } />
              </div>

              <div>
                <span className="total-living"><strong>Total Living</strong> 659 sf</span>
                <span className="interior"><strong>Interior</strong> 538 sf</span>
                <span className="outdoor"><strong>Outdoor</strong> 121 sf</span>

                <a className="btn btn--solid" target="_blank" download href={ `${process.env.BASE_PATH}/rel/plans/Tailor_Floorplans_Sheets_A1.pdf` }>Download PDF</a>
              </div>
            </div>

            <div className="grid__item">
              <div>
                <span className="plan-type">B</span>
                <span className="plan-style">1 Bedroom + 1 bath</span>
                <img className="landscape" src={ `${process.env.BASE_PATH}/rel/plans/Plan-B.svg` } />
              </div>

              <div>
                <span className="total-living"><strong>Total Living</strong> 723 sf</span>
                <span className="interior"><strong>Interior</strong> 646 sf</span>
                <span className="outdoor"><strong>Outdoor</strong> 77 sf</span>

                <a className="btn btn--solid" target="_blank" download href={ `${process.env.BASE_PATH}/rel/plans/Tailor_Floorplans_Sheets_B.pdf` }>Download PDF</a>
              </div>
            </div>

            <div className="grid__item">
              <div>
                <span className="plan-type">C</span>
                <span className="plan-style">2 Bedroom + 2 Bath</span>
                <img src={ `${process.env.BASE_PATH}/rel/plans/Plan-C.svg` } />
              </div>

              <div>
                <span className="total-living"><strong>Total Living</strong> 991 sf</span>
                <span className="interior"><strong>Interior</strong> 764 sf</span>
                <span className="outdoor"><strong>Outdoor</strong> 227 sf</span>

                <a className="btn btn--solid" target="_blank" download href={ `${process.env.BASE_PATH}/rel/plans/Tailor_Floorplans_Sheets_C.pdf` }>Download PDF</a>
              </div>
            </div>

            <div className="grid__item">
              <div>
                <span className="plan-type">C1</span>
                <span className="plan-style">2 Bedroom + 2 Bath</span>
                <img src={ `${process.env.BASE_PATH}/rel/plans/Plan-C1.svg` } />
              </div>

              <div>
                <span className="total-living"><strong>Total Living</strong> 960 sf</span>
                <span className="interior"><strong>Interior</strong> 786 sf</span>
                <span className="outdoor"><strong>Outdoor</strong> 174 sf</span>

                <a className="btn btn--solid" target="_blank" download href={ `${process.env.BASE_PATH}/rel/plans/Tailor_Floorplans_Sheets_C1.pdf` }>Download PDF</a>
              </div>
            </div>

            <div className="grid__item">
              <div>
                <span className="plan-type">D</span>
                <span className="plan-style">2 Bedroom + 2 Bath</span>
                <img className="landscape" src={ `${process.env.BASE_PATH}/rel/plans/Plan-D.svg` } />
              </div>

              <div>
                <span className="total-living"><strong>Total Living</strong> 1,116 sf</span>
                <span className="interior"><strong>Interior</strong> 893 sf</span>
                <span className="outdoor"><strong>Outdoor</strong> 223 sf</span>

                <a className="btn btn--solid" target="_blank" download href={ `${process.env.BASE_PATH}/rel/plans/Tailor_Floorplans_Sheets_D.pdf` }>Download PDF</a>
              </div>
            </div>

            <div className="grid__item">
              <div>
                <span className="plan-type">D1</span>
                <span className="plan-style">2 Bedroom + 2 Bath</span>
                <img className="landscape" src={ `${process.env.BASE_PATH}/rel/plans/Plan-D1.svg` } />
              </div>

              <div>
                <span className="total-living"><strong>Total Living</strong> 1,116 sf</span>
                <span className="interior"><strong>Interior</strong> 893 sf</span>
                <span className="outdoor"><strong>Outdoor</strong> 223 sf</span>

                <a className="btn btn--solid" target="_blank" download href={ `${process.env.BASE_PATH}/rel/plans/Tailor_Floorplans_Sheets_D1.pdf` }>Download PDF</a>
              </div>
            </div>

            <div className="grid__item">
              <div>
                <span className="plan-type">E</span>
                <span className="plan-style">Jr. 1 Bedroom + 1 Bath</span>
                <img className="landscape" src={ `${process.env.BASE_PATH}/rel/plans/Plan-E.svg` } />
              </div>

              <div>
                <span className="total-living"><strong>Total Living</strong> 640 sf</span>
                <span className="interior"><strong>Interior</strong> 484 sf</span>
                <span className="outdoor"><strong>Outdoor</strong> 156 sf</span>

                <a className="btn btn--solid" target="_blank" download href={ `${process.env.BASE_PATH}/rel/plans/Tailor_Floorplans_Sheets_E.pdf` }>Download PDF</a>
              </div>
            </div>

            <div className="grid__item">
              <div>
                <span className="plan-type">F</span>
                <span className="plan-style">Studio + 1 Bath</span>
                <img className="landscape" src={ `${process.env.BASE_PATH}/rel/plans/Plan-F.svg` } />
              </div>

              <div>
                <span className="total-living"><strong>Total Living</strong> 529 sf</span>
                <span className="interior"><strong>Interior</strong> 366 sf</span>
                <span className="outdoor"><strong>Outdoor</strong> 163 sf</span>

                <a className="btn btn--solid" target="_blank" download href={ `${process.env.BASE_PATH}/rel/plans/Tailor_Floorplans_Sheets_F.pdf` }>Download PDF</a>
              </div>
            </div>

            <div className="grid__item">
              <div>
                <span className="plan-type">TH1</span>
                <span className="plan-style">2 Bedroom + 2 Bath + 2 Powder + Work</span>
                <img className="landscape" src={ `${process.env.BASE_PATH}/rel/plans/Plan-TH1.svg` } />
              </div>

              <div>
                <span className="total-living"><strong>Total Living</strong> 2,378 sf</span>
                <span className="interior"><strong>Interior</strong> 1,701 sf</span>
                <span className="outdoor"><strong>Outdoor</strong> 677 sf</span>

                <a className="btn btn--solid" target="_blank" download href={ `${process.env.BASE_PATH}/rel/plans/Tailor_Floorplans_Sheets_TH1.pdf` }>Download PDF</a>
              </div>
            </div>

            <div className="grid__item">
              <div>
                <span className="plan-type">TH2</span>
                <span className="plan-style">2 Bedroom + 2 Bath + 2 Powder + Work</span>
                <img className="landscape" src={ `${process.env.BASE_PATH}/rel/plans/Plan-TH2.svg` } />
              </div>

              <div>
                <span className="total-living"><strong>Total Living</strong> 2,352 sf</span>
                <span className="interior"><strong>Interior</strong> 1,679 sf</span>
                <span className="outdoor"><strong>Outdoor</strong> 673 sf</span>

                <a className="btn btn--solid" target="_blank" download href={ `${process.env.BASE_PATH}/rel/plans/Tailor_Floorplans_Sheets_TH2.pdf` }>Download PDF</a>
              </div>
            </div>

            <div className="grid__item">
              <div>
                <span className="plan-type">TH3-4</span>
                <span className="plan-style">2 Bedroom + 2 Bath + 2 Powder + Work</span>
                <img className="landscape" src={ `${process.env.BASE_PATH}/rel/plans/Plan-TH3-4.svg` } />
              </div>

              <div>
                <span className="total-living"><strong>Total Living</strong> 2,352 sf</span>
                <span className="interior"><strong>Interior</strong> 1,679 sf</span>
                <span className="outdoor"><strong>Outdoor</strong> 673 sf</span>

                <a className="btn btn--solid" target="_blank" download href={ `${process.env.BASE_PATH}/rel/plans/Tailor_Floorplans_Sheets_TH3-4.pdf` }>Download PDF</a>
              </div>
            </div>

            <div className="grid__item">
              <div>
                <span className="plan-type">TH5</span>
                <span className="plan-style">2 Bedroom + 2 Bath + 2 Powder + Work</span>
                <img className="landscape" src={ `${process.env.BASE_PATH}/rel/plans/Plan-TH5.svg` } />
              </div>

              <div>
                <span className="total-living"><strong>Total Living</strong> 2,522 sf</span>
                <span className="interior"><strong>Interior</strong> 1,701 sf</span>
                <span className="outdoor"><strong>Outdoor</strong> 821 sf</span>

                <a className="btn btn--solid" target="_blank" download href={ `${process.env.BASE_PATH}/rel/plans/Tailor_Floorplans_Sheets_TH5.pdf` }>Download PDF</a>
              </div>
            </div>
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
