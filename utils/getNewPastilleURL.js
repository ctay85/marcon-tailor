
// Utils
import { computePastilles } from 'utils'

// getNewPastilleURL
export default function getNewPastilleURL(bgColor, bgBorderColor, fgColor, fgBorderColor, activeLevel, numHotspot, w, h) {
  return computePastilles(
    w,
    h,
    bgColor,
    bgBorderColor,
    fgColor,
    fgBorderColor,
    activeLevel,
    numHotspot,
    w,
    h
  )
}
