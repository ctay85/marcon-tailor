import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />

        {process.env.GTM_ID && process.env.NODE_ENV === "production" ? (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
           new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
           j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
           'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
           })(window,document,'script','dataLayer','${process.env.GTM_ID}');`,
            }}
          ></script>
        ) : null}

        <script
          type="application/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(b,o,n,g,s,r,c){if(b[s])return;b[s]={};b[s].scriptToken="XzI4NDgxNjUyNA";b[s].callsQueue=[];b[s].api=function(){b[s].callsQueue.push(arguments);};r=o.createElement(n);c=o.getElementsByTagName(n)[0];r.async=1;r.src=g;r.id=s+n;c.parentNode.insertBefore(r,c);})(window,document,"script","https://cdn.oribi.io/XzI4NDgxNjUyNA/oribi.js","ORIBI");`,
          }}
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
