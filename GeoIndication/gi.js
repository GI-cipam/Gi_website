var g = document.getElementById("gi").innerHTML;



var rootRef=firebase.database().ref().child("Giproducts");
rootRef.on("child_added",function(datasnap){
  var gi = datasnap.child("name").val();


if(g==gi){
  var cat = datasnap.child("category").val();
  var gides = datasnap.child("description").val();
  var gidetail = datasnap.child("detail").val();
  var gi_url = datasnap.child("dpurl").val();
  var gi_his = datasnap.child("history").val();
  var giname = datasnap.child("name").val();
  var statename = datasnap.child("state").val();
  var add = datasnap.child("seller").child("seller1").child("address").val();
  var contact = datasnap.child("seller").child("seller1").child("contact").val();
  var lati = datasnap.child("seller").child("seller1").child("lat").val();
  var lon = datasnap.child("seller").child("seller1").child("lon").val();
  var sellername = datasnap.child("seller").child("seller1").child("name").val();
  $("#gi_img").append("<img src="+gi_url+" style='max-height: 200px;'/>");
  $("#gstate").append(statename);
  $("#gcat").append(cat);
  $("#des").append(gides);
  $("#detail").append(gidetail);
  $("#his").append(gi_his);

  if(lati==null){
    lati = 11.1271;
  }
  if(lon==null){
    lon= 78.6569 ;
  }




  function myMap() {
    var mapCanvas = document.getElementById("map");
    var myCenter = new google.maps.LatLng(lati,lon);
    var mapOptions = {center: myCenter, zoom: 4};
    var map = new google.maps.Map(mapCanvas,mapOptions);
    // var marker = new google.maps.Marker({
    //   position: myCenter,
    //   animation: google.maps.Animation.BOUNCE,
    //   visible: true
    // });

    var marker = new google.maps.Marker({
      draggable: false,
      raiseOnDrag: false,
      clickable: true,
      icon: image,
      shadow: shadow,
      shape: shape,
      map: map,
      url: 'http://www.google.com/',
      visible: true,
      position: myCenter
  });





  }
  myMap();
}
});
