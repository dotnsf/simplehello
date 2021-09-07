// app.js
var express = require( 'express' ),
    app = express();

app.get( '/', function( req, res ){
  res.contentType( 'text/plain; charset=utf-8' );
  var hello = "Hello World.";
  if( req.query.hello ){
    hello = req.query.hello;
  }
  res.write( hello );
  res.end();
});

var port = process.env.PORT || 8080;
app.listen( port );
console.log( "server starting on " + port + " ..." );
