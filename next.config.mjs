/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const basePath = "/tailor";

const nextConfig = {
  reactStrictMode: true,

  env: {
    PROJECT_NAME: "Tailor",
    GTM_ID: "GTM-NXGTHLD",
    BASE_PATH: isProd ? basePath : "",
    //BASE_PATH : '',

    RECAPTCHA_SITE_KEY: "6LcI8c0ZAAAAAK77Jw_Nx5MsptdE-aLZAZtctyh4",
    RECAPTCHA_SECRET: "6LcI8c0ZAAAAAPnGy3iOBqvptWdhvlWdK8uU0Onc",
  },

  basePath: isProd ? basePath : "",
  output: "export",
};

export default nextConfig;
