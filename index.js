var Hapi = require('hapi');
var Good = require('good');

var render = require('markdown-parser').render;

var server = new Hapi.Server(3000);

var html = render('README.md');
console.log(html);

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply(html);
    }
});

server.pack.register(Good, function (err) {
    if (err) {
        throw err; // something bad happened loading the plugin
    }

    server.start(function () {
        server.log('info', 'Server running at: ' + server.info.uri);
    });
});
