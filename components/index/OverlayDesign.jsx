
//
import { Overlay, OverlayContent, OverlayImage } from 'components/index'
import { Accordion, AccordionItem } from 'components/ui'

//
export default function OverlayDesign (props) {
  return (
    <Overlay {...props}>
      <OverlayContent category="Design" title="More Thought">
        <Accordion>
          <AccordionItem title="Green Initiatives">
            <p>Improved indoor air quality thanks to low VOC paints and flooring throughout</p>
            <p>Water conservation: low-flow toilets, showerheads and faucet aerators, as well as drought-tolerant landscaping</p>
            <p>Energy conservation: high-efficiency domestic hot water, heating & cooling system; energy-efficient common area lighting; Energy Star® windows, refrigerator, dishwasher and laundry</p>
            <p>Emissions reduction: pre-wired power to select parking stall locations in the underground parkade for Level 2 electric vehicle charging</p>
            <p>Recycling program: recycling facilities for residents; recycled materials used in construction; demolition material and up to 75% of construction waste recycled</p>
            <p>Extra-green efforts: native plantings to reduce the need for pesticides and fertilizers; erosion control and vegetation safeguards; and environmental workshops with trades and suppliers</p>
          </AccordionItem>
          <AccordionItem title="Exterior">
            <p>Improved indoor air quality thanks to low VOC paints and flooring throughout</p>
            <p>Water conservation: low-flow toilets, showerheads and faucet aerators, as well as drought-tolerant landscaping</p>
            <p>Energy conservation: high-efficiency domestic hot water, heating & cooling system; energy-efficient common area lighting; Energy Star® windows, refrigerator, dishwasher and laundry</p>
            <p>Emissions reduction: pre-wired power to select parking stall locations in the underground parkade for Level 2 electric vehicle charging</p>
            <p>Recycling program: recycling facilities for residents; recycled materials used in construction; demolition material and up to 75% of construction waste recycled</p>
            <p>Extra-green efforts: native plantings to reduce the need for pesticides and fertilizers; erosion control and vegetation safeguards; and environmental workshops with trades and suppliers</p>
          </AccordionItem>
          <AccordionItem title="Connected & Convenient">
            <p>Improved indoor air quality thanks to low VOC paints and flooring throughout</p>
            <p>Water conservation: low-flow toilets, showerheads and faucet aerators, as well as drought-tolerant landscaping</p>
            <p>Energy conservation: high-efficiency domestic hot water, heating & cooling system; energy-efficient common area lighting; Energy Star® windows, refrigerator, dishwasher and laundry</p>
            <p>Emissions reduction: pre-wired power to select parking stall locations in the underground parkade for Level 2 electric vehicle charging</p>
            <p>Recycling program: recycling facilities for residents; recycled materials used in construction; demolition material and up to 75% of construction waste recycled</p>
            <p>Extra-green efforts: native plantings to reduce the need for pesticides and fertilizers; erosion control and vegetation safeguards; and environmental workshops with trades and suppliers</p>
          </AccordionItem>
        </Accordion>
      </OverlayContent>

      <OverlayImage src="/img/index/B&TB_MARCON_TAILOR_DUSK_UP_FINAL_2400x3199.jpg" />
    </Overlay>
  )
}
