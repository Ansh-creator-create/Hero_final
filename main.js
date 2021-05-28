var canvas = new fabric.Canvas("myCanvas");
var biw = 30;
var bih = 30;
var px = 10;
var py = 10;
var plj = "";
var block_image_object = "";
function player_update(e_obj){
    fabric.Image.fromURL("18820.jpg",function(Img){
    plj = Img;
    plj.scaleToHeight(140);
plj.scaleToWidth(140);
plj.set({top:py,left:px});
canvas.add(plj);
});
}
function new_img(get_image)
{
   fabric.Image.fromURL(get_image, function(Img) {
   block_image_object = Img;
   block_image_object.scaleToWidth(biw);
   block_image_object.scaleToHeight(bih);
   block_image_object.set({
   top:py,
   left:px
   });
   canvas.add(block_image_object);

   });


}
    window.addEventListener("keydown",my_keydown);
    function my_keydown(e){
        var kp = e.keyCode;
        console.log(kp);
    if (kp == '86'){
        console.log("V is pressed");
        biw = biw + 10;
       bih = bih + 10;
        document.getElementById("current_wid").innerHTML= biw;
    document.getElementById("current_hie").innerHTML = bih;
    }
   if (kp == '78'){
       console.log("N is pressed");
       biw = biw - 10;
       bih = bih - 10;
   document.getElementById("current_wid").innerHTML= biw;
   document.getElementById("current_hie") .innerHTML=bih;
   }
if(kp == '37'){
   left();
   console.log("left");
}
if (kp == '39'){
   right();
   console.log("right");
}
if (kp == '38'){
   up();
   console.log("up");
}
if(kp == '40'){
   down();
   console.log("down");
}
if(kp == '76'){
   new_img('ironman_body.png');
   console.log("l is pressed");
}
if (kp == '74'){
   new_img('spiderman_face.png');
   console.log("j is pressed");
}
if(kp == '71'){   
new_img('hulk_right_hand.png');
console.log("g is pressed");
}
if(kp == '72'){
new_img('captain_america_left_hand (1).png');
console.log("h is pressed");
}
    }
    function up(){
      if(py >= 0){
          py = py - bih;
          console.log("bih = "+ bih);
      console.log("When up arrow is pressed x = " + px | "And y is =" + py);
  canvas.remove(plj);
  player_update();
  }
  
  }
  function down(){
      if(py <= 500){
          py = py + bih;
          console.log("bih = " + bih);
          console.log("When down arrow is pressed x =" + px | "And y is = " + py);
          canvas.remove(plj);
          player_update();
      }
  }
      function left(){ 
          if(px => 0){
              px = px - biw;
              console.log("When left arrow is pressed x =" + px | "And y is = "+py);
  canvas.remove(plj);
  player_update();
          }
      }
          function right(){
              if(px <= 850){
                  px = px + biw;
                  console.log("When right arrow is pressed x = "+px | "And y is = " + py);
              canvas.remove(plj);
              player_update();
          }
          }
          
          

       