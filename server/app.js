var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({extended: true})); // this creates req.body

var fishiesList = [{name: 'walleye'}, {name: 'pike'}, {name: 'muskie'}];

app.get('/fish', function(req, res){
    console.log(req);
    res.send(fishiesList);
});
app.get('/fish/first', function(req, res){
    res.send(fishiesList[0]);

});

app.get('/fish/last', function(req, res){
    res.send(fishiesList[fishiesList.length - 1]);
});

app.get('/fish/last/name', function(req, res){
    res.send(fishiesList[fishiesList.length - 1].name);
});

app.get('/fish/first/name', function(req, res){
    res.send(fishiesList[0].name);
});

app.post('/fish/new', function(req, res){
    var newFish = req.body;
    if(newFish.name === "") {
      res.sendStatus(400);
    } else {
    fishiesList.push(newFish);
    res.sendStatus(200);
  }
});


app.listen(5000);
