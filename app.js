var express = require('express');
var app = express();
var path=require('path');
var port = 5000;
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.static('public'));
console.log("Started server...");

app.get('/',function(req,res) {
    res.render('index');
});

app.listen(port);
