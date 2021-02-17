
export default function getViewOffset (unitNumber) {
  switch (unitNumber) {

    // NE
    case '01' :
      return 0

    // SE
    case '02' :
      return 0

    // S
    case '03' :
    case '04' :
    case '05' :
      return 0

    // SW
    case '06' :
      return 0

    // NW
    case '07' :
      return 0

    // N
    case '08' :
      return -881

    default :
      return -881
  }
}
