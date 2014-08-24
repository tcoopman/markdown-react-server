var React = require('react');
var request = require('browser-request');
var app = require('markdown-react').buildReactApp;

request('/markdown', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var readmeApp = new app(body);

    React.renderComponent(readmeApp, document.body);
  }
})
