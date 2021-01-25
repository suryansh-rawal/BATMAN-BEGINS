class Umbrella{
    constructor(x,y){
var options ={
    // giveisStaic true 
    isStatic : true
}
    
// give shape of the body and add image to it
    this.body = Bodies.circle(x, y, 110, options);
   
    this.image = loadImage("Image/walking_5.png");
    World.add(world, this.body);
}
    // make display function to give the height and width and angle of the body + image
display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0,0, 300,300);
    pop();
  };
}
