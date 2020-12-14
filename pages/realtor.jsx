
// Components
import { Seo } from 'components/common'

// Component
export default function Realtor () {
  return (
    <>
      <Seo title="Realtor" />

      <main className="page__realtor">
        <div className="wrap--reg">

          <h1 className="page-title">REALTOR Portal</h1>

          <div className="section-intro">
            <h2>Welcome to the Tailor by Marcon – Realtor portal.</h2>

            <aside>
              <p className="text--display">Here you can find Tailor brand assets that can be used for the promotion of this new twenty-seven storey tower comprised of 193 homes nestled in the heart of Brentwood. Please be sure to review the Disclaimer for legal requirements pertaining to the use of all marketing renderings and materials provided.</p>
            </aside>
          </div>

          <h2>Marketing</h2>

          <p>
            Website &mdash; http://marcon.ca/tailor/
            <br />
            Preview Package &mdash; <a href="https://www.dropbox.com/s/1qqjh71p0wrp5vr/Tailor%20By%20Marcon%20_%20Preview%20Package.pdf?dl=0" target="_blank">Download</a>
            <br />
            Logo &mdash; <a href="https://www.dropbox.com/sh/a45thjibeiz2xqn/AACjjQJVUvAm9pSVgLJCoob6a?dl=0" target="_blank">JPG</a> <a href="https://www.dropbox.com/sh/trxy2n71qmc9oom/AADqh4T1o1GmsPinnJcwbyBta?dl=0" target="_blank">PNG</a>
            <br />
            Font Preference &mdash; Americana or Aerial
          </p>

          <h3>Floorplans</h3>
          <div className="grid" rel="2">
            <a target="_blank" download href={ `${process.env.BASE_PATH}/realtor/plans/` }>
              <img src={ `${process.env.BASE_PATH}/realtor/plans` } />
            </a>

            <a target="_blank" download href={ `${process.env.BASE_PATH}/realtor/plans/` }>
              <img src={ `${process.env.BASE_PATH}/realtor/plans` } />
            </a>

            <a target="_blank" download href={ `${process.env.BASE_PATH}/realtor/plans/` }>
              <img src={ `${process.env.BASE_PATH}/realtor/plans` } />
            </a>

            <a target="_blank" download href={ `${process.env.BASE_PATH}/realtor/plans/` }>
              <img src={ `${process.env.BASE_PATH}/realtor/plans` } />
            </a>
          </div>

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

          <h3>Gallery</h3>
          <div className="grid" rel="2">
            <a target="_blank" download href={ `${process.env.BASE_PATH}/realtor/gallery/hires/NEW_B&TB_MARCON_TAILOR_ARTWORK_NIGHT_FINAL.jpg` }>
              <img src={ `${process.env.BASE_PATH}/realtor/gallery/web/NEW_B&TB_MARCON_TAILOR_ARTWORK_NIGHT_FINAL.jpg` } />
            </a>
            <a target="_blank" download href={ `${process.env.BASE_PATH}/realtor/gallery/hires/B&TB_MARCON_TAILOR_INT_LOBBY_HALL_NEW_PEOPLE_FINAL.jpg` }>
              <img src={ `${process.env.BASE_PATH}/realtor/gallery/web/B&TB_MARCON_TAILOR_INT_LOBBY_HALL_NEW_PEOPLE_FINAL.jpg` } />
            </a>
            <a target="_blank" download href={ `${process.env.BASE_PATH}/realtor/gallery/hires/B&TB_MARCON_TAILOR_LOBBY_CORNER_FINAL.jpg` }>
              <img src={ `${process.env.BASE_PATH}/realtor/gallery/web/B&TB_MARCON_TAILOR_LOBBY_CORNER_FINAL.jpg` } />
            </a>
            <a target="_blank" download href={ `${process.env.BASE_PATH}/realtor/gallery/hires/B&TB_MARCON_TAILOR_DUSK_UP_FINAL.jpg` }>
              <img src={ `${process.env.BASE_PATH}/realtor/gallery/web/B&TB_MARCON_TAILOR_DUSK_UP_FINAL.jpg` } />
            </a>
          </div>

          <h2>Sales</h2>
          <h3>Sales are anticipated to commence in February 2021.</h3>

          <p>You can schedule a private appointment to the Tailor Sales Centre located at 2421 Alpha Avenue in Burnaby. Please connect with our Tailor Sales Team to schedule a private tour: Call <a href="tel:6042991001">604.299.1001</a> or by email: <a href="mail:sales@tailorbymarcon.ca">sales@tailorbymarcon.ca</a></p>

          <h3>Disclaimer</h3>
          <p>This is currently not an offering for sale. Such an offering can only be made by way of a disclosure statement issuant pursuant to the Real Estate Development Marketing Act. The material provided herein is for general informational purposes only and is not intended to depict as-built construction designs. The Developer reserves the right in its sole discretion to make modifications or changes to building design, floor plans, project designs, specifications, finishes, features, and dimensions, without prior notice. Renderings are artistic concepts only. Square footages are approximate and have been calculated from architectural drawings. Actual final dimensions following completion of construction may vary from those set out herein. E.&O.E. Marcon Alpha (GP) Ltd.</p>


        </div>
      </main>
    </>
  )
}
