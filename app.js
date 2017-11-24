var express=require('express');

var home = require('./routes/home');
var signin = require('./routes/sign_in');

//App setup
var port = process.env.PORT || 4000;
var app=express();
var server=app.listen(port,function(){
    console.log('listening to request on port 4000')
});

app.use('/', home);
app.use('/signIn',signin);

// serve static files
app.use(express.static('public'));