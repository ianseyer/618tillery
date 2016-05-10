//Configure our Bunyan logs
var app = require('../server').app
var bunyan = require('bunyan')
app.SYSLOG = bunyan.createLogger({
    name: 'log',
    streams: [
      {
        level: 'info',
        stream: process.stdout
      },
      {
        level: 'error',
        path: '/logs/error.log',
        stream: process.stdout
      }
    ]
});
app.ACCESSLOG = bunyan.createLogger({
  name: 'access',
  streams: [
    {
      level: 'info',
      path: '/logs/access.log'
    },
    {
      level: 'error',
      path: '/logs/access.log'
    }
  ]
});
