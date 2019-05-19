var express = require('express');
var bodyPaser = require('body-parser');
var path = require ('path');

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({ extended: true}));
app.use(bodyPaser.text());
app.use(bodyPaser.json({ type: 'application/vnd.api+json'}));

app.use(express.static('app/public'));

//if it does not work try without .js
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

app.listen(port, () => console.log('listening on port %s', port));
