var c = document.getElementById("gistate").innerHTML;
var ce = "";


var rootRef=firebase.database().ref().child("Giproducts");
rootRef.on("child_added",function(datasnap){
  //x.innerText=datasnap.val();
//  alert(datasnap.val());
var sname = datasnap.child("state").val();
var cate = datasnap.child("category").val();

if(c==sname){
  var gi = datasnap.child("name").val();
  var statename = datasnap.child("state").val();
  var cat = datasnap.child("category").val();
  $("#s_gi").append("<tr><td><a href='gi.php?gi="+gi+"'>"+gi+"</a></td><td>"+statename+"</td><td>"+cat+"</td></tr>");
}
if(c==ce){
  var gi = datasnap.child("name").val();
  var statename = datasnap.child("state").val();
  var cat = datasnap.child("category").val();
  $("#s_gi").append("<tr><td><a href='gi.php?gi="+gi+"'>"+gi+"</a></td><td>"+statename+"</td><td>"+cat+"</td></tr>");
}
if(c==cate){
  var gi = datasnap.child("name").val();
  var statename = datasnap.child("state").val();
  var cat = datasnap.child("category").val();
  $("#s_gi").append("<tr><td><a href='gi.php?gi="+gi+"'>"+gi+"</a></td><td>"+statename+"</td><td>"+cat+"</td></tr>");
}

// else{
//   var gi = datasnap.child("name").val();
//   var statename = datasnap.child("state").val();
//   var cat = datasnap.child("category").val();
//     $("#s_gi").append("<tr><td>"+gi+"</td><td>"+statename+"</td><td>"+cat+"</td></tr>");
// }
// var sname = datasnap.child("state").val();
// if(c==sname){
// alert(sname);
// var gi = database.child("name").val();
// alert(gi);
// var gi_url = database.child("dpurl").val();
// }

});
// if(c==sname)
// {
//   $("#s_gi").append("<td>"+gi+"</td>");
// }


// var url = datasnap.child("dpurl").val();
// <?php
// $var_name="<script>document.write(name)</script>";
// ?>
// <a href='gi.php?name=<?php echo "+name+";?>'><?php echo "+name+";?></a>
//$("#s").append("<li><img src='"+url+"'></li>");
//  $("#s").append("<li><div>"+url+"</div><br><div>"+name+"</div></li>");
// <h4><a href='gi.html' id='giname'>"+name+"</a></h4>
// <a href="gi.php?gi="><?php echo $my_var;?></a>
// <h4><a href='gi.php' id='giname'>"+name+"</a></h4>
// <h4><a href='gi.php?name=<?php echo '"+name+"';?>'><?php echo '"+name+"';?></a></h4>
// <form name='form1' action='gi.html' method='get'><h4 id='giname'>"+name+"</h4><br><button type='button' onClick='giFunc()'> Print </button></form>


// $("#s").append("<td onclick='location.href='#';' style='padding:10px !important; box-shadow:0 4px 8px 0 rgba(0,0,0,0.2); max-width: 100%; max-height: 100%;'><img src="+url+" style='max-width: 100%; max-height: 150px;' /><div class='caption-info'><div class='caption-info-head'><div class='caption-info-head-left'><h4><a href='gi.php?name="+name+"'>"+name+"</a></h4></div><div class='caption-info-head-right'></div><div class='clear'></div></div></div></td>");
// var giname = document.getElementById("giname");
