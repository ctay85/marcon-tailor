// Dependencies
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import SVG from "react-inlinesvg";
import { useSelector } from "react-redux";

// Utils
import { indexPanelAnimations } from "@/utils";

// Store
import { INDEX_OVERLAY_KEY_BRENTWOOD } from "@/store/constants";

// Components
import { BgImage } from "@/components/ui";

// Component
export default function Brendwood({ active, setActiveOverlayKey }) {
  const sectionClass = useRef("page__index__brentwood");
  const [animationState, setAnimationState] = useState("initial");
  const [isMobile, setIsMobile] = useState(false);
  const { locale } = useSelector((state) => state);

  //
  useEffect(() => {
    const isActive = active === sectionClass.current;
    if (isActive) setAnimationState("enter");
    if (!isActive) setAnimationState("exit");
  }, [active]);

  //
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth < 767 && !isMobile) setIsMobile(true);
      if (window.innerWidth > 767 && isMobile) setIsMobile(false);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [isMobile]);

  //
  return (
    <motion.section
      className={sectionClass.current}
      data-panel-trigger="true"
      data-active={active === sectionClass.current}
      initial="initial"
      enter="enter"
      exit="exit"
      animate={animationState}
      variants={indexPanelAnimations.container}
    >
      <motion.div
        className="bg-animation"
        initial="initial"
        enter="enter"
        exit="exit"
        animate={animationState}
        variants={indexPanelAnimations.bgAnimation}
      >
        <BgImage
          src={`${process.env.BASE_PATH}/img/index/19067_Marcon_TailorAerial_AerialL01.jpg`}
        />
      </motion.div>

      <article>
        <motion.span
          className="panel-name"
          initial="initial"
          enter="enter"
          exit="exit"
          animate={animationState}
          variants={indexPanelAnimations.panelName}
          dangerouslySetInnerHTML={{ __html: locale.index.brentwood.title }}
        ></motion.span>

        <motion.p
          className="panel-description"
          initial="initial"
          enter="enter"
          exit="exit"
          animate={animationState}
          variants={indexPanelAnimations.panelDescription}
        >
          {locale.index.brentwood.description}
        </motion.p>
      </article>

      <div
        className="mobile-tap-indicator"
        onClick={() => setActiveOverlayKey(INDEX_OVERLAY_KEY_BRENTWOOD)}
      >
        <span>More</span>
      </div>

      <motion.button
        className="desktop-click-indicator"
        onClick={() => setActiveOverlayKey(INDEX_OVERLAY_KEY_BRENTWOOD)}
        initial="initial"
        enter="enter"
        exit="exit"
        animate={animationState}
        variants={indexPanelAnimations.indicator}
      >
        <span>{locale.global.more}</span>
        <SVG src={`${process.env.BASE_PATH}/svg/thin-arrow-down.svg`} />
      </motion.button>
    </motion.section>
  );
}
