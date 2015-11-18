// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

//This is the "round" version. I noticed it was cool when each star started the song again if you timed it right.

//mousePressed = continuous, mouseClicked is an event

// Example 1-1: stroke and fill

function preload(){
     song = loadSound('HedwigTheme.mp4'); 
}

function setup() {
	var c = color('#3B0B2E');
	createCanvas(windowWidth,windowHeight);
	background(c);
   // song.loop();
}

function draw() {
   // star(mouseX, mouseY, 20, 55, 5);
	var c2 = color('#4B610B');
  if (mouseIsPressed){
  	star(mouseX, mouseY, 10, 35, 5);
    fill(c2);
      song.play();
  }
    //var speed = map(mouseX, 0.1, width, 0, 2);
    //speed = constrain(speed, 0.01, 4);
    //song.rate(speed);  
}
  

//function mousePressed(){
   // var c = color('#2A0A29');
	//var c2 = color('#4B610B');
   // if(song.isPlaying()){
        //star(mouseX, mouseY, 20, 55, 5);
        //fill(c2);
     //   song.stop();
    //}else {
    //    fill(c2);
    //    star(mouseX, mouseY, 10, 39, 5);
     //   song.loop();
    //}
//}


function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}