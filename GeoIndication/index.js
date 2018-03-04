// $(document).ready(function(){
//
//   var rootRef = firebase.database.ref().child("States");
//
//   rootRef.on("child_added",snap => {
//
//     alert(snap.val());
//   });
// });
// var database = firebase.database();
// database.ref().child("States").on('value', function(snapshot){
//     if(snapshot.exists()){
//         var content = '';
        // snapshot.forEach(function(data){
        //     var val = data.val();
        //
        //     content += '<li onclick="location.href="#";">';
        //     content += '<img src="'+val.dpurl+'" />';
        //     content += '<div class="caption-info">';
        //     content += '<div class="caption-info-head">';
        //     content += '<div class="caption-info-head-left">';
        //     content += '<h4><a href="#">'+ val.name+'</a></h4>';
        //     content += '</div>';
        //     content += '<div class="caption-info-head-right">';
        //     content += '<span> </span>';
        //     content += '</div>';
        //     content += '<div class="clear"> </div>';
        //     content += '</div>';
        //     content += '</div>';
        //     content += '</li>';
        // });
        //
        //
        //


//         $('#svalue').append(content);
//     }
// })



  var rootRef=firebase.database().ref().child("States");
  rootRef.on("child_added",function(datasnap){
    //x.innerText=datasnap.val();
  //  alert(datasnap.val());
  var name = datasnap.child("name").val();

  var url = datasnap.child("dpurl").val();
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


// $("#s").append("<td style='box-shadow:0 4px 8px 0 rgba(0,0,0,0.2); max-width: 400px !important; max-height: 200px !important;'><img src="+url+" style='max-width: 350px; max-height: 200px;' /><div class='caption-info'><div class='caption-info-head'><div class='caption-info-head-left'  style='margin-bottom: 15px;'><h1><a href='list.php?name="+name+"'>"+name+"</a></h1></div></div></div></td>");
// var giname = document.getElementById("giname");
$("#s").append("<td style='box-shadow:0 4px 8px 0 rgba(0,0,0,0.2); padding: 10px;'><p><img src="+url+" style='max-width: 350px; max-height: 200px;'/></p><div style='margin-bottom: 15px; margin-top: 5px;'><b><a href='list.php?name="+name+"'>"+name+"</a></b></div></td>");

});


var rootRef2=firebase.database().ref().child("Categories");
rootRef2.on("child_added",function(datasnap){
  //x.innerText=datasnap.val();
//  alert(datasnap.val());
var cat_name = datasnap.child("name").val();

var cat_url = datasnap.child("dpurl").val();
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


$("#cat").append("<td style='box-shadow:0 4px 8px 0 rgba(0,0,0,0.2); padding: 10px;'><p><img src="+cat_url+" style='max-width: 350px; max-height: 200px;'/></p><div style='margin-bottom: 15px; margin-top: 5px;'><b><a href='list.php?name="+cat_name+"'>"+cat_name+"</a></b></div></td>");
// var giname = document.getElementById("giname");





});

// function giFunc()
// {
// var giname = document.getElementById('giname');
// document.getElementById('gname').innerHTML = giname;
//
// }

// function giFunc1() {
//     var b = document.getElementById('name').value;
//         url = 'http://192.168.1.10:8082/gi.html?name=' + encodeURIComponent(b);
//
//     document.location.href = url;
// }
//
//
//
//   var c = document.getElementById('qqq').data;
//
//   document.getElementById('here2').innerHTML = c;


    // var c = document.getElementById('qqq').value;
    // document.getElementById('here2').innerHTML = "hello";
