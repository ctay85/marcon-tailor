// Dependencies
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import SVG from "react-inlinesvg";
import { useSelector } from "react-redux";

// Utils
import { indexPanelAnimations } from "@/utils";

// Store
import { INDEX_OVERLAY_KEY_DESIGN } from "@/store/constants";

// Components
import { BgImage } from "@/components/ui";

// Component
export default function Design({ active, setActiveOverlayKey }) {
  const sectionClass = useRef("page__index__design");
  const [animationState, setAnimationState] = useState("initial");
  const { locale } = useSelector((state) => state);

  //
  useEffect(() => {
    const isActive = active === sectionClass.current;
    if (isActive) setAnimationState("enter");
    if (!isActive) setAnimationState("exit");
  }, [active]);

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
      <article>
        <motion.span
          className="panel-name"
          initial="initial"
          enter="enter"
          exit="exit"
          animate={animationState}
          variants={indexPanelAnimations.panelName}
          dangerouslySetInnerHTML={{ __html: locale.index.design.title }}
        ></motion.span>

        <motion.p
          className="panel-description"
          initial="initial"
          enter="enter"
          exit="exit"
          animate={animationState}
          variants={indexPanelAnimations.panelDescription}
        >
          {locale.index.design.description}
        </motion.p>
      </article>

      <figure className="image-trigger">
        <motion.div
          className="blind"
          initial="initial"
          enter="enter"
          exit="exit"
          animate={animationState}
          variants={indexPanelAnimations.blind}
        ></motion.div>

        <div className="video-container">
          <video
            src={`${process.env.BASE_PATH}/vid/lobby-exterior-loop-v2.mp4`}
            loop
            autoPlay
            muted
            playsInline
          ></video>
        </div>

        <span className="caption">{locale.index.design.caption}</span>
      </figure>

      <div
        className="mobile-tap-indicator"
        onClick={() => setActiveOverlayKey(INDEX_OVERLAY_KEY_DESIGN)}
      >
        <span>More</span>
      </div>

      <motion.button
        className="desktop-click-indicator"
        onClick={() => setActiveOverlayKey(INDEX_OVERLAY_KEY_DESIGN)}
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
