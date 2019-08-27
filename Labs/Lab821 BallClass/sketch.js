//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var b1, b2;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  b1 = new Ball(random(width), random(height), random(-9,9), random(-9,9));
  b2 = new Ball(random(width), random(height), random(-9,9), random(-9,9));
}

//  The draw function is called @ 30 fps
function draw() {
  b1.run();
  b2.run();
}
