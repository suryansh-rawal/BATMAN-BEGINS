class falldrop {
  constructor(x,y,radius) {
    var options = {
        isStatic: false,
        restitution:0.6
        
    }
    this.body = Bodies.circle(x,y,1,options);
    this.radius=radius;
    this.color=color("blue");
  
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    push();
   //translate(this.body.position.x,this.body.position.y)
    fill(this.color);
    ellipseMode(CENTER);
    ellipse(pos.x, pos.y, 7);
    pop();
  }
};