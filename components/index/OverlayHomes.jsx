//
import { Overlay, OverlayContent, OverlayImage } from "@/components/index";
import { Accordion, AccordionItem } from "@/components/ui";

//
export default function OverlayPublicArt(props) {
  return (
    <Overlay {...props}>
      <OverlayContent category="Specifications">
        <p>
          Expansive balconies up to 319 sf, bedrooms large enough for king beds,
          & view windows above kitchen sinks, Tailor offers more space and
          function than Brentwood has ever seen.
        </p>

        <Accordion>
          <AccordionItem title="Homes">
            <ul>
              <li>Contemporary light filled interiors</li>
              <li>
                High efficiency heating and air conditioning system for
                year‐round comfort
              </li>
              <li>Airy 9&apos; ceilings</li>
              <li>Two contemporary colour palettes to choose from</li>
              <li>Stacked front‐loading Blomberg washer and dryer</li>
              <li>
                Smart glass LowE2 panoramic windows welcome an abundance of
                natural light and fresh air
              </li>
              <li>Built in USB charging connection in kitchen and bedrooms</li>
              <li>
                Spacious master bedrooms for ultimate relaxation (room for king
                beds in most)
              </li>
              <li>
                Wide‐plank laminate hardwood flooring either in Dahlia or Noah
              </li>
              <li>Sleek roller shades on all windows</li>
              <li>4" flat stock baseboards and 2.5" flat stock door trim</li>
            </ul>
          </AccordionItem>

          <AccordionItem title="Kitchens">
            <ul>
              <li>
                Panasonic stainless steel microwave oven with trim kit above and
                below
              </li>
              <li>Cabinetry doors complete with soft close hardware</li>
              <li>
                Lazy Susan corner storage unit for added convenience and storage
                (select homes)
              </li>
              <li>Full‐height pantries for added storage</li>
              <li>Solid quartz countertops in ‘Yixin White’</li>
              <li>Statuario marble Hexagon Mosaic honed tile backsplash</li>
              <li>
                Kohler pull‐down single lever faucet with vegetable sprayer in
                polished chrome
              </li>
              <li>Under‐sink pull‐out recycling bins</li>
              <li>
                Recessed pot lighting accompanied with LED under‐cabinet puck
                lighting
              </li>
            </ul>

            <p className="list-title">
              <strong>
                For one bedroom homes, premium stainless‐steel appliances
                include:
              </strong>
            </p>
            <ul>
              <li>Bosch 24&quot; integrated refrigerator/freezer</li>
              <li>Bosch 24&quot; 4 burner gas cooktop</li>
              <li>Bosch 24&quot; wall oven</li>
              <li>Bosch 24&quot; integrated dishwasher</li>
              <li>AEG 24&quot; range hood fan</li>
              <li>Single bowl Krueger stainless‐steel under‐mount sink</li>
            </ul>

            <p className="list-title">
              <strong>
                For two bedroom, penthouse and townhome plans, premium stainless
                steel appliances include:
              </strong>
            </p>
            <ul>
              <li>Bosch 30&quot; integrated refrigerator/freezer</li>
              <li>Bosch 30&quot; 5 burner gas cooktop</li>
              <li>Bosch 30&quot; wall oven</li>
              <li>Bosch 24&quot; integrated dishwasher</li>
              <li>AEG 30&quot; range hood fan</li>
              <li>Double bowl Krueger stainless steel under‐mount sink</li>
            </ul>
          </AccordionItem>

          <AccordionItem title="Ensuite and Main Bath">
            <ul>
              <li>
                Floating vanity with under‐cabinet motion sensor lighting
                complete with soft close hardware
              </li>
              <li>Solid quartz countertop in ‘Yixin White’</li>
              <li>Kohler under‐mount sink</li>
              <li>Kohler single lever faucet in polished chrome</li>
              <li>
                Mirrored medicine cabinets in ensuite for your day‐to‐day
                essentials
              </li>
              <li>
                12" x 24" matte porcelain floor tile and back wall of shower and
                tub apron
              </li>
              <li>Ceramic wall tile</li>
              <li>Built‐in ledge in showers</li>
              <li>
                Kohler hand shower system in polished chrome with conveniently
                placed shower control valve for easy access
              </li>
              <li>Frameless glass shower enclosure in ensuite</li>
              <li>Modern square deep soaker tub in main bath</li>
              <li>Kohler dual flush toilet</li>
              <li>
                Bathroom accessories (towel bar, tissue holder) in polished
                chrome
              </li>
            </ul>
          </AccordionItem>
        </Accordion>
      </OverlayContent>

      <OverlayImage
        images={[
          `${process.env.BASE_PATH}/img/index/homes/Tailor-Web-26.jpg`,
          `${process.env.BASE_PATH}/img/index/homes/Tailor-Web-28.jpg`,
          `${process.env.BASE_PATH}/img/index/homes/Tailor-Web-29.jpg`,
        ]}
      />
    </Overlay>
  );
}
