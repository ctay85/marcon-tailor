
// Dependencies
import SVG from 'react-inlinesvg'

//
import { Overlay, OverlayContent, OverlayImage, OverlayGallery } from 'components/index'
import { Accordion, AccordionItem } from 'components/ui'
import { RegisterSalesforce } from 'components/common'

//
export default function OverlayInteriors (props) {
  return (
    <Overlay {...props}>
      <article className="enquire">
        <div className="wrap">
          <p className="enquire__title">Get in Touch</p>

          <p>
            Presentation Centre<br />
            2421 Alpha Avenue,<br />
            Burnaby, BC
          </p>

          <p>
            To book a private sales appointment<br />
            T: <a href="tel:6042991001">604.299.1001</a><br />
            E: <a href="mailto:sales@tailorbymarcon.ca">Sales@TailorbyMarcon.ca</a>
          </p>

          <SVG src={`${process.env.BASE_PATH}/svg/Tailor_Map_Neighbourhood_v1.svg`} />
        </div>

        <RegisterSalesforce reversed={ true } />
      </article>
    </Overlay>
  )
}
