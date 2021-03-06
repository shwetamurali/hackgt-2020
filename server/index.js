const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build/client-build')));
app.use(express.static(path.join(__dirname, 'build/restaurant-build')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/client/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build/client-build', 'index.html'));
});

app.get('/restaurant/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build/restaurant-build', 'index.html'));
});

app.post('/createItem',(request,response) => {
    // createCategoryItem(request.body.name, request.body.category, request.body.description);
    response.send("recieved");
});

app.listen(process.env.PORT || 8080);
