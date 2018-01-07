var express=require('express');
var nodemailer = require('nodemailer');
var firebase = require('firebase');
var app = firebase.initializeApp({ 
  apiKey: "AIzaSyAeFB6v4sdJpdnvHM6xIIiJz4Us5XibKIA",
  authDomain: "gi-website-36c02.firebaseapp.com",
  databaseURL: "https://gi-website-36c02.firebaseio.com",
  projectId: "gi-website-36c02",
  storageBucket: "gi-website-36c02.appspot.com",
  messagingSenderId: "1092547245593"});

var home = require('./routes/home');
var signin = require('./routes/sign_in');
var signup=require('./routes/sign_up');

//App setup
var port = process.env.PORT || 4000;
var app=express();
var server=app.listen(port,function(){
    console.log('listening to request on port 4000')
});

function email(){
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'gi.cipam@gmail.com',
          pass: 'cipam@123'
        }
      });
      
      var mailOptions = {
        from: 'gi.cipam@gmail.com',
        to: 'rishabhmalik249@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}

email();

app.use('/', home);
app.use('/signIn',signin);
app.use('/signUp',signup);

// serve static files
app.use(express.static('public'));