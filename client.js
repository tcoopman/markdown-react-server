var React = require('react');
var request = require('browser-request');
var app = require('markdown-parser').app;

request('/markdown', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Print the google web page.

    var readmeApp = new app(body);

    React.renderComponent(readmeApp, document.body);
  }
})
