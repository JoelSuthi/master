class Paper {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true,
          restitution:0.3,
          friction:0.5,
          density:1.2,
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image = loadImage("paper.png");
    }
    display(){
      var pos =this.body.position;
      rectMode(RADIUS);
      fill("white");
      ellipse(pos.x, pos.y, this.width, this.height);
      imageMode (CENTER);
      image(this.image,50,710,this.width,this.height);
    }
  };