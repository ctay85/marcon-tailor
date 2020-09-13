
// Dependencies
import { useRouter } from 'next/router'
import SVG from 'react-inlinesvg'

// Component
const Footer = () => {
  const router = useRouter()

  return (
    <footer className="global__footer" data-slug={ router.asPath }>
      <div className="left">
        <a href="http://marcon.ca/en/" target="_blank"><SVG src="/img/common/Logo-Marcon-01-231x34.svg" /></a>
        <a href="https://rennie.com/" target="_blank"><SVG src="/img/common/Logo-Marketing-by-rennie-113x37.svg" /></a>
        <a href="tel:6042991001" className="text-link" target="_blank">604.299.1001</a>
        <a href="mailto:Sales@TailorbyMarcon.ca" className="text-link" target="_blank">Sales@TailorbyMarcon.ca</a>
      </div>

      <div className="right">
        <SVG src="/img/common/Buildingforlife.svg" />
      </div>
    </footer>
  )
}

// Export
export default Footer
