//index.js inside server
//our main server!
const path = require('path')
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
 //const db = require('./db.js'); 

//server!
const app = express();

//logging middleware
app.use(morgan('dev'));

//static middleware
app.use(express.static(path.join(__dirname, '../')));

//this allows us to use req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//where we get routes
//matches all requests to /api
app.use('/api', require('./api'));

//should always direct to index.html
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
  });


//START THE SERVER!
const port = process.env.PORT || 3000; // this can be very useful if you deploy to Heroku!

app.listen(port, function () {
    console.log("Knock, knock");
    console.log("Who's there?");
    console.log(`Your server, listening on port ${port}`);
});

//put this at the end of file to catch internal server errors
app.use(function (err, req, res, next) {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
});




