// Store
import { INDEX_PANEL_TRANSITION_DURATION } from "@/store/constants";

//
export default {
  container: {
    initial: { opacity: 0 },
    enter: {
      opacity: 1,
      transition: { duration: INDEX_PANEL_TRANSITION_DURATION, delay: 0.5 },
    },
    exit: {
      opacity: 0,
      transition: { duration: INDEX_PANEL_TRANSITION_DURATION },
    },
  },

  panelName: {
    initial: { opacity: 0, y: 50 },
    enter: {
      opacity: 1,
      y: 0,
      transition: { duration: INDEX_PANEL_TRANSITION_DURATION, delay: 0.8 },
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: { duration: INDEX_PANEL_TRANSITION_DURATION },
    },
  },

  panelTagline: {
    initial: { opacity: 0, y: 50 },
    enter: {
      opacity: 1,
      y: 0,
      transition: { duration: INDEX_PANEL_TRANSITION_DURATION, delay: 0.7 },
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: { duration: INDEX_PANEL_TRANSITION_DURATION, delay: 0.1 },
    },
  },

  panelDescription: {
    initial: { opacity: 0, y: 50 },
    enter: {
      opacity: 1,
      y: 0,
      transition: { duration: INDEX_PANEL_TRANSITION_DURATION, delay: 0.6 },
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: { duration: INDEX_PANEL_TRANSITION_DURATION, delay: 0.2 },
    },
  },

  btnMore: {
    initial: { opacity: 0, y: 50 },
    enter: {
      opacity: 1,
      y: 0,
      transition: { duration: INDEX_PANEL_TRANSITION_DURATION, delay: 0.5 },
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: { duration: INDEX_PANEL_TRANSITION_DURATION, delay: 0.3 },
    },
  },

  blind: {
    initial: { width: "110%" },
    enter: { width: "0%", transition: { duration: 0.5, delay: 1.3 } },
    exit: { width: "110%", transition: { duration: 0.5 } },
  },

  bgAnimation: {
    initial: { scale: 1.05 },
    enter: {
      scale: 1,
      transition: { duration: INDEX_PANEL_TRANSITION_DURATION, delay: 0.5 },
    },
    exit: {
      scale: 1.05,
      transition: { duration: INDEX_PANEL_TRANSITION_DURATION },
    },
  },

  indicator: {
    initial: { opacity: 0, x: 100 },
    enter: {
      opacity: 1,
      x: 0,
      transition: { duration: INDEX_PANEL_TRANSITION_DURATION / 2, delay: 1.4 },
    },
    exit: {
      opacity: 0,
      x: 100,
      transition: { duration: INDEX_PANEL_TRANSITION_DURATION / 2 },
    },
  },
};
