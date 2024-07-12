
export default function getViewImage ( level ) {
  switch ( level ) {
    case '3' :
    case '4' :
    case '5' :
      return `${process.env.BASE_PATH}/img/views/Tailor_Panoramas_1_web.jpg`
    case '6' :
    case '7' :
    case '8' :
      return `${process.env.BASE_PATH}/img/views/Tailor_Panoramas_2_web.jpg`
    case '9' :
    case '10' :
    case '11' :
      return `${process.env.BASE_PATH}/img/views/Tailor_Panoramas_3_web.jpg`
    case '12' :
    case '13' :
    case '14' :
      return `${process.env.BASE_PATH}/img/views/Tailor_Panoramas_4_web.jpg`
    case '15' :
    case '16' :
    case '17' :
      return `${process.env.BASE_PATH}/img/views/Tailor_Panoramas_5_web.jpg`
    case '18' :
    case '19' :
    case '20' :
      return `${process.env.BASE_PATH}/img/views/Tailor_Panoramas_6_web.jpg`
    case '21' :
    case '22' :
    case '23' :
      return `${process.env.BASE_PATH}/img/views/Tailor_Panoramas_7_web.jpg`
    case '24' :
    case '25' :
    case '26' :
      return `${process.env.BASE_PATH}/img/views/Tailor_Panoramas_8_web.jpg`
    case '27' :
      return `${process.env.BASE_PATH}/img/views/Tailor_Panoramas_9_web.jpg`
    default :
      return `${process.env.BASE_PATH}/img/views/Tailor_Panoramas_1_web.jpg`
  }
}
