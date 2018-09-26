//Install express server
const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || '8080';
app.set('port', port);
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

// Start the app by listening on the default Heroku port
app.listen(app.get('port'), function(){
  console.log("node app is running at localhost:" + app.get('port'));
});

app.get('/*', function(req,res) {
  res.set('Content-Type', 'text/html')
  .sendFile(path.join(__dirname+'/dist/index.html'));
})

console.log('Console listening!');

