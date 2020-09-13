
/*

  Dev  : pm2 start pm2.config.js --only PROJECTNAME_dev
  Prod : pm2 start pm2.config.js --only PROJECTNAME

*/


module.exports = {
  apps : [
    {
      name : "PROJECTNAME_dev",
      script : "npm",
      args : "run prod",
      env : { "NODE_ENV": "production" }
    },
    {
      name : "PROJECTNAME",
      script : "npm",
      args : "run prod",
      env : { "NODE_ENV": "production" }
    },
  ]
}
