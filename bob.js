class Bob{
    constructor(x, y, w, h, angle){
            var options ={
                'restitution':0.8,
                'friction':1.0,
                'density':1.0
            }
            this.body = Bodies.ellipse(x, y, w, h, options);
            this.w = w;
            this.h = h
            World.add(world, this.body); 
        }  
        display(){
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            ellipseMode(CENTER);
            fill("purple");
            ellipse(0, 0, w, h);
            pop();
     }
}