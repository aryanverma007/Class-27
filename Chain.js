   class Chain {

   constructor(body1,body2){

   var option = {

   bodyA: body1,
   bodyB: body2,
   stiffness: 0.04,
   length: 20 

   }
   this.chain = Matter.Constraint.create(option);
   World.add(world,this.chain);
   }
   
   display(){
    var p1=this.chain.bodyA.position
    var p2=this.chain.bodyB.position

    push();
    strokeWeight(4);  
    line(p1.x,p1.y,p2.x,p2.y)
    pop();
}
}