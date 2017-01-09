var path = require('path');
var express = require('express');

// Create new express application
var app = express();

// Serve static files from dist directory
app.use(express.static(__dirname));

// Set port to given ENV or default 5000
app.set('port', (process.env.PORT || 5000));

// Serve index file on default request
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Start listening
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
