
// Dependencies
import { useRouter } from 'next/router'
import SVG from 'react-inlinesvg'

// Component
const Footer = () => {
  const router = useRouter()

  return (
    <footer className="global__footer" data-slug={ router.pathname }>
      <div className="global__footer__top">
        <a href="tel:6042991001" className="text-link" target="_blank">604.299.1001</a>
        <a href="mailto:Sales@TailorbyMarcon.ca" className="text-link" target="_blank">Sales@TailorbyMarcon.ca</a>
      </div>

      <div className="global__footer__bottom--left">
        <a href="http://marcon.ca/en/" className="logo-link" target="_blank"><SVG src="/img/common/Logo-Marcon-01-231x34.svg" /></a>
        <a href="https://rennie.com/" className="logo-link" target="_blank"><SVG src="/img/common/Logo-Marketing-by-rennie-113x37.svg" /></a>
      </div>

      <div className="global__footer__bottom--right">
        <SVG className="logo-building-for-life" src="/img/common/Buildingforlife.svg" />
      </div>

      <div className="global__footer__disclaimer">
        <p><small>This is currently not an offering for sale. Such an offering can only be made by way of a disclosure statement issuant pursuant to the Real Estate Development Marketing Act. The material provided herein is for general informational purposes only and is not intended to depict as-built construction designs. The Developer reserves the right in its sole discretion to make modifications or changes to building design, floor plans, project designs, specifications, finishes, features, and dimensions, without prior notice. Renderings are artistic concepts only. Square footages are approximate and have been calculated from architectural drawings. Actual final dimensions following completion of construction may vary from those set out herein. E.&O.E. Marcon Alpha (GP) Ltd.</small></p>
      </div>
    </footer>
  )
}

// Export
export default Footer
