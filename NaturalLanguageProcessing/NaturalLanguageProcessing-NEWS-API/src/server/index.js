var path = require('path')
const express = require('express')
const dotenv = require('dotenv');
const mockAPIResponse = require('./mockAPI.js')

const app = express();

// Cors for cross origin allowance - dev mode
const cors = require('cors');
app.use(cors());

dotenv.config();

var aylien = require("aylien_textapi");

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// Designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

// Test API
app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// Aylien API key and values : Getting from env
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

app.get('/api', function (req, res) {
    let obj = [];

    textapi.sentiment({
        text: req.query.input,
        mode: 'Document'
      }, function(error, response) {
        if (error === null) {
            obj.push(response.polarity);
        }
        res.send(response);
      });
})

