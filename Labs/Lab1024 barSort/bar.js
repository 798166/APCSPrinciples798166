//Will Kreidler
//1007
/*
*/
class Square{
//  Add perameters to your constructor function
constructor(x,y,w,h,clr){
  this.loc = createVector(x,y)
  this.w = w;
  this.h = h;
  this.clr = clr;
}
run(){
  this.render();
  this.update();
}

render(){
  fill(this.clr);
  rect(this.x, this.y, this.w, this.h);
}

//function Sqr(){
//  Add instance variables to your constructor Function
//What does a square need to know about itself??

  //this.render = function(){

//  }

//}
}//  End of Square constructor function
