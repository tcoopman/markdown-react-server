# markdown-react-server

Renders markdown to react on the server

# TODO

* Find an efficient method for the client side rerender of the markdown. At the moment we must fetch the markdown from the server too. Not sure if that's a good option.

# Run

* clone this repo
* `npm install`
* `node_modules/webpack/bin/webpack.js client.js bundle.js`
* `node index.js`
* surf to [http://localhost:3000](http://localhost:3000)
