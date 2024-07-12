// Dependencies
import Head from "next/head";

// Component
const HeadComponent = () => (
  <Head>
    <meta charSet="utf-8" />
    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width,  initial-scale=1" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="google-site-verification"
      content="dmhF85RwMS7bXqjbUps2yf0J-qE8JQziVbO6xEoPhLE"
    />

    {/* <script type="text/javascript" src="https://static.sketchfab.com/api/sketchfab-viewer-1.9.0.js"></script> */}

    {/*
      <script src="//app.lassocrm.com/analytics.js" type="text/javascript"></script>
      <script type="text/javascript" dangerouslySetInnerHTML={{ __html : `var LassoCRM = LassoCRM || {}; (function(ns){ ns.tracker = new LassoAnalytics('LAS-541914-15'); })(LassoCRM); try { LassoCRM.tracker.setTrackingDomain("//app.lassocrm.com"); LassoCRM.tracker.init(); LassoCRM.tracker.track(); LassoCRM.tracker.patchRegistrationForms(); } catch(error) {}` }}></script>
    */}
  </Head>
);

// Export
export default HeadComponent;
