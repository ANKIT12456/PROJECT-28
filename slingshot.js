class slingshot{

    constructor(bodyA,pointB){

        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffness:0.004
        }
        this.pointB=pointB;
        this.bodyA=bodyA;
        this.body=Constraint.create(options);
        World.add(world,this.body);

        
    }

    fly(){
      
        this.body.bodyA=null
    }

        attach(body1){
            this.body.bodyA=body1;
         }

    display(){

        if(this.body.bodyA){
        var posa=this.body.bodyA.position;
        var posb=this.pointB;

        strokeWeight(2);
        line (posa.x,posa.y,posb.x,posb.y);
        }
    }
}


