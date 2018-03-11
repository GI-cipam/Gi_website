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

  // var gisell = datasnap.child("seller").on("child_added",function(snap){
  //   var n = snap.child("name").val();
  //   alert(n);
  // });



  $("#gi_img").append("<img src="+gi_url+" style='max-height: 200px;'/>");
  $("#gstate").append(statename);
  $("#gcat").append(cat);
  $("#des").append(gides);
  $("#detail").append(gidetail);
  $("#his").append(gi_his);

  // var gisell = datasnap.child("seller").on("child_added",function(datasnap){
  //
  //     var sellername = datasnap.child("name").val();
  //     alert(sellername);
  //     var selleradd = datasnap.child("address").val();
  //     var sellercontact = datasnap.child("contact").val();
  //     $("#sellerd").append("<tr><td>"+sellername+"</td><td>"+selleradd+"</td><td>"+sellercontact+"</td></tr>");
  // });


}




});
