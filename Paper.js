class Paper {
    constructor(x, y, radius) {
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x, y,radius, options);
        this.radius=radius
        this.image = loadImage("paper.png")
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        
        ellipseMode(RADIUS);
        fill("blue");
        image(this.image,0, 0, 50,50);
        
        pop();
       
      }
};