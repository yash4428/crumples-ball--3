class Ball {
    constructor(x, y, radius) {
      var options ={
          isStatic:false,
          'restitution':0.1,
          'friction': 0.5,
          'density':1.2
      }
      this.x=x;
      this.y=y;
      this.radius = radius;
      this.image = loadImage("paper.jpeg");
      this.body = Bodies.circle(this.x,this.y, this.radius/2, options);
      

      World.add(world, this.body);

    }
     
   
    display(){
      var pos =this.body.position;
      //var angle = this.body.angle;
      
      push();
      translate(pos.x, pos.y);
      //this.body.position.x = mouseX;
      //this.body.position.Y = mouseY;
      //rotate(angle);
     // ellipseMode(RADIUS);\
     rectMode(CENTER)
      strokeWeight(4);
      stroke("green");
      fill(255);
     //ellipse(0,0,this.radius,this.radius);
     imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
      pop();
    }
  }
  