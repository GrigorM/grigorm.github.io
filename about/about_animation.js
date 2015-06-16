
var rects = [];
var canvas;
function setup() {
  // put setup code here
  if(screen.width<600){
	canvas = createCanvas(screen.width, screen.height-200);
  }else{
	canvas = createCanvas(screen.width/2, screen.height-200);
  }
  //canvas.position(screen.width/2, 0);
  canvas.parent('about_animation_block');
  background(255);
  //div = createDiv("Testing, testing, 1 2 3");
  //div.position();
  //div.class('customDiv');
  for(var i=0; i<13; i++){
	rects[i] = new Rect();
  }
}

function draw() {
  // put drawing code here
  background(255);
  for(var i=0; i<13; i++){
	rects[i].be();
  }  
  
}

function Rect() {
	this.w = random(200);
	this.h = this.w;
	this.x = random(width);
	this.y = random(height);
	this.opacity = random(150, 225);
	this.strWeight = int(random(1, 4));
	this.rot = random(TWO_PI);
	this.dieRate = int(random(1, 5));
	rectMode(CENTER);
	noFill();
	
	this.be = function(){
		stroke(0, this.opacity);
		push();
		translate(this.x, this.y);
		rotate(this.rot);		
		strokeWeight(this.strWeight);
		rect(0, 0, this.w, this.h);
		pop();
		//alert('lalalalala');
		this.opacity-= this.dieRate;
		if(this.opacity < -10){
			this.w = random(200);
			this.h = this.w;
			this.x = random(width);
			this.y = random(height);
			this.opacity = random(100, 175);	
			this.rot = random(TWO_PI);			
		}
	}
}
