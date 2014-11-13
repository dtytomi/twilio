var Hapi = require('hapi');
var routes = require('./routes')(Hapi);

var server = Hapi.createServer('Localhost', process.env.PORT || 3000);

server.route([{
  method: 'GET',
  path: '/vote/sms',
  handler: routes.voteSMS

}]);

server.start();
