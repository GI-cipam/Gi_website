var latlng;
var lat,lng;

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showLocation);
} else {
    console.log("Geolocation is not supported by this browser.");
}

function showLocation(position){
lat=position.coords.latitude;  
lng=position.coords.longitude; 

latlng = new google.maps.LatLng(lat, lng); 

new google.maps.Geocoder().geocode({'latLng' : latlng}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
        if (results[1]) {
            var country = null, countryCode = null, city = null, cityAlt = null;
            var c, lc, component;
            for (var r = 0, rl = results.length; r < rl; r += 1) {
                var result = results[r];

                if (!city && result.types[0] === 'locality') {
                    for (c = 0, lc = result.address_components.length; c < lc; c += 1) {
                        component = result.address_components[c];

                        if (component.types[0] === 'locality') {
                            city = component.long_name;
                            break;
                        }
                    }
                }
                else if (!city && !cityAlt && result.types[0] === 'administrative_area_level_1') {
                    for (c = 0, lc = result.address_components.length; c < lc; c += 1) {
                        component = result.address_components[c];

                        if (component.types[0] === 'administrative_area_level_1') {
                            cityAlt = component.long_name;
                            break;
                        }
                    }
                } else if (!country && result.types[0] === 'country') {
                    country = result.address_components[0].long_name;
                    countryCode = result.address_components[0].short_name;
                }

                if (city && country) {
                    break;
                }
            }

            console.log("City: " + city + ", City2: " + cityAlt + ", Country: " + country + ", Country Code: " + countryCode);
        }
    }
});}


function email(){
    var email;
    firebase.auth().onAuthStateChanged(user => {
        if(user) {
        console.log('signed in');
        window.user = user;
        email=user.email;}
        else console.log('user not found');    
    })

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'gi.cipam@gmail.com',
          pass: 'cipam@123'
        }
      });
      
      var mailOptions = {
        from: 'gi.cipam@gmail.com',
        to: email,
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