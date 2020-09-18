
const isProd = process.env.NODE_ENV === 'production'
const basePath = '/the-tailor'

module.exports = {
  env : {
    PROJECT_NAME : 'Tailor',
    GTM_ID : '',
    BASE_PATH : isProd ? basePath : '',

    CONTENTFUL_SPACE_ID : '',
    CONTENTFUL_TOKEN : ''
  },

  basePath : isProd ? basePath : ''
}
