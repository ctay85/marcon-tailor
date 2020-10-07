
// Dependencies
import Head from "next/head"

// Component
const HeadComponent = () => (
  <Head>
    <meta charSet="utf-8" />
    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width,  initial-scale=1" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="google-site-verification" content="dmhF85RwMS7bXqjbUps2yf0J-qE8JQziVbO6xEoPhLE" />

    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

    {
      process.env.GTM_ID && process.env.NODE_ENV === 'production'
        ? (
           <script dangerouslySetInnerHTML={{ __html : `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
           new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
           j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
           'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
           })(window,document,'script','dataLayer','${process.env.GTM_ID}');` }}></script>
         )
        : null
    }

    {/*
      <script src="//app.lassocrm.com/analytics.js" type="text/javascript"></script>
      <script type="text/javascript" dangerouslySetInnerHTML={{ __html : `var LassoCRM = LassoCRM || {}; (function(ns){ ns.tracker = new LassoAnalytics('LAS-541914-15'); })(LassoCRM); try { LassoCRM.tracker.setTrackingDomain("//app.lassocrm.com"); LassoCRM.tracker.init(); LassoCRM.tracker.track(); LassoCRM.tracker.patchRegistrationForms(); } catch(error) {}` }}></script>
    */}

  </Head>
)

// Export
export default HeadComponent
