
// Dependencies
import { useRouter } from 'next/router'
import SVG from 'react-inlinesvg'

// Component
const Footer = () => {
  const router = useRouter()

  return (
    <footer className="global__footer" data-slug={ router.pathname }>
      <div className="wrap--flex">
        <div className="global__footer__left">
          <a className="logo-marcon" href="https://marcon.ca"><SVG src={ `${process.env.BASE_PATH}/svg/Logo-Marcon-01-231x34.svg` } /></a>
          <SVG className="logo-building" src={ `${process.env.BASE_PATH}/svg/Buildingforlife.svg` } />
        </div>

        <div className="global__footer__right">
          <ul className="link-list">
            <li>Projects</li>
            <li><a href="http://marcon.ca/en/projects/" target="_blank" rel="noopener noreferrer">All Projects</a></li>
          </ul>

          <ul className="link-list">
            <li>Homeowner Support</li>
            <li><a href="http://marcon.ca/en/home-owner/overview/" target="_blank" rel="noopener noreferrer">Overview</a></li>
            <li><a href="http://customercare.marcon.ca/customercare/login?_ga=2.151397625.1506990333.1606844496-1308414839.1603733869" target="_blank" rel="noopener noreferrer">Log in</a></li>
          </ul>

          <ul className="link-list">
            <li>Our Company</li>
            <li><a href="http://marcon.ca/en/our-company/overview/" target="_blank" rel="noopener noreferrer">Overview</a></li>
            <li><a href="http://marcon.ca/en/our-company/news/" target="_blank" rel="noopener noreferrer">News</a></li>
            <li><a href="http://marcon.ca/en/our-company/community/" target="_blank" rel="noopener noreferrer">Community</a></li>
            <li><a href="http://marcon.ca/en/our-company/careers/" target="_blank" rel="noopener noreferrer">Careers</a></li>
          </ul>

          <ul className="link-list social">
            <li><a href="https://www.facebook.com/MarconHomes" target="_blank" rel="noopener noreferrer"><SVG src={ `${process.env.BASE_PATH}/svg/facebook.svg` } /></a></li>
            <li><a href="https://www.instagram.com/MarconHomes" target="_blank" rel="noopener noreferrer"><SVG src={ `${process.env.BASE_PATH}/svg/instagram.svg` } /></a></li>
            <li><a href="https://www.linkedin.com/company/marcon" target="_blank" rel="noopener noreferrer"><SVG src={ `${process.env.BASE_PATH}/svg/linkedin.svg` } /></a></li>
          </ul>
        </div>
      </div>

      <div className="global__footer__reverse">
        <div className="global__footer__reverse__left">
          <div>
            <a href="tel:6042991001" className="text-link" target="_blank" rel="noopener noreferrer">604.299.1001</a>
            <br />
            <a href="mailto:sales@tailorbymarcon.ca" className="text-link" target="_blank" rel="noopener noreferrer">Sales@TailorByMarcon.ca</a>
          </div>

          <a href="https://rennie.com/" className="logo-rennie" target="_blank">
            <SVG src={ `${process.env.BASE_PATH}/img/common/Logo-Rennie-Sales-By.svg` } />
          </a>
        </div>
        <div className="global__footer__reverse__bottom">
          <p className="disclaimer">This production is not an offering for sale.  No offering for sale can be made until after a Disclosure Statement, issued pursuant to the Real Estate Development Marketing Act of B.C. has been provided to a prospective purchaser. This production material is not an offering for sale. No offering for sale can be made until after a Disclosure Statement, issued pursuant to the Real Estate Development Marketing Act of B.C. has been provided to a prospective purchaser. The material provided herein is for general informational purposes only and is not intended to depict as-built construction designs or finishes. The Developer reserves the right in its sole discretion to make modifications or changes to building design, floor plans, project designs, specifications, finishes, features, incentives and dimensions, without prior notice. Renderings and any depicted views are artistic concepts only.  Square footages are approximate and have been calculated from architectural drawings.  Actual final dimensions following completion of construction may vary from those set out herein. E.&O.E. Marcon Johnston (GP) Ltd. * Pricing, promotions and incentives all subject to change. Please see sales representative for details.</p>

          <nav className="nav-util">
            <a href="http://marcon.ca/en/privacy-policy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            <a href="http://marcon.ca/en/terms-of-use/" target="_blank" rel="noopener noreferrer">Terms of Use</a>
            <a href="https://marcon.ca/wp-content/uploads/2020/10/Construction-Site-Full-COVID-19-Procedures.pdf" target="_blank" rel="noopener noreferrer">COVID Safety Plan</a>
            <span className="bullet">&bull;</span>
            <span className="copywrite">&copy; 2020 Marcon</span>
          </nav>
        </div>
      </div>
    </footer>
  )
}

// Export
export default Footer
