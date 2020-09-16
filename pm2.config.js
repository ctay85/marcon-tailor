
/*

  Dev  : pm2 start pm2.config.js --only tailor_dev
  Prod : pm2 start pm2.config.js --only tailor

*/


module.exports = {
  apps : [
    {
      name : "tailor_dev",
      script : "npm",
      args : "run prod",
      env : { "NODE_ENV": "production" }
    },
    {
      name : "tailor",
      script : "npm",
      args : "run prod",
      env : { "NODE_ENV": "production" }
    },
  ]
}
