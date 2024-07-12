// Dependencies
import { useSelector } from "react-redux";

// Components
import { Overlay, OverlayGallery } from "@/components/index";

//
export default function OverlayInteriors(props) {
  const { locale } = useSelector((state) => state);

  //
  return (
    <Overlay {...props}>
      <OverlayGallery
        active={props.active}
        images={locale.overlays.interiors.images.map((image) => ({
          ...image,
          file: `${process.env.BASE_PATH}${image.file}`,
        }))}
      />
    </Overlay>
  );
}
