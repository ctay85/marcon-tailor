
// Dependencies
import { useRouter } from 'next/router'
import SVG from 'react-inlinesvg'

// Component
const Footer = () => {
  const router = useRouter()

  return (
    <footer className="global__footer" data-slug={ router.pathname }>
      <div className="global__footer__top">
        <div className="global__footer__top__left">
          <a href="http://marcon.ca/en/" className="logo-marcon" target="_blank">
            <SVG src={ `${process.env.BASE_PATH}/img/common/Logo-Marcon-01-231x34.svg` } />
          </a>
          <br />
          <a href="https://marcon.ca/tailor" className="refresh-link">marcon.ca/tailor</a>
        </div>
        <div className="global__footer__top__right">
          <SVG className="logo-building-for-life" src={ `${process.env.BASE_PATH}/img/common/Buildingforlife.svg` } />
        </div>
      </div>

      <div className="global__footer__bottom">
        <div className="global__footer__bottom__left">
          <a href="tel:6042991001" className="text-link" target="_blank">604.299.1001</a>
          <br />
          <a href="mailto:sales@tailorbymarcon.ca" className="text-link" target="_blank">Sales@TailorByMarcon.ca</a>
        </div>
        <div className="global__footer__bottom__right">
          <a href="https://rennie.com/" className="logo-rennie" target="_blank">
            <SVG src={ `${process.env.BASE_PATH}/img/common/Logo-Rennie-Sales-By.svg` } />
          </a>
        </div>
        <div className="global__footer__bottom__bottom">
          <p className="disclaimer">This is currently not an offering for sale. Such an offering can only be made by way of a disclosure statement issuant pursuant to the Real Estate Development Marketing Act. The material provided herein is for general informational purposes only and is not intended to depict as-built construction designs. The Developer reserves the right in its sole discretion to make modifications or changes to building design, floor plans, project designs, specifications, finishes, features, and dimensions, without prior notice. Renderings are artistic concepts only. Square footages are approximate and have been calculated from architectural drawings. Actual final dimensions following completion of construction may vary from those set out herein. E.&O.E. Marcon Alpha (GP) Ltd.</p>
        </div>
      </div>
    </footer>
  )
}

// Export
export default Footer
