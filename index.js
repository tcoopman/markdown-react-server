var fs = require('fs');

var Hapi = require('hapi');
var Good = require('good');
var React = require('react');

var app = require('markdown-parser').app;

var server = new Hapi.Server(3000);
var text = fs.readFileSync('README.md', 'utf-8');

var readmeApp = app(text);
var html = React.renderComponentToString(readmeApp);
html = '<html><head><title>test</title></head><body>' + html + '<script type="text/javascript" src="bundle.js" charset="utf-8"></script></body></html>';
console.log(html);

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply(html);
    }
});

server.route({
    method: 'GET',
    path: '/bundle.js',
    handler: function (request, reply) {
        reply.file('bundle.js');
    }
});


server.route({
  method: 'GET',
  path: '/markdown',
  handler: function (request, reply) {
    reply.file('README.md');
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
