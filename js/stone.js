class stone{
    constructor(x,y) {
        var options = {
            'isStatic':true,
            'restitution':0,
            'friction':1,
            'density':1.2
        }
        this.body = Bodies.rectangle(x, y, 5, 5, options);
        this.image=loadImage("images/stone.png");
        World.add(world, this.body);
        Matter.Body.setStatic(this.body,false);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image( this.image,0, 0, 50, 50);
        pop();
      }
}