'use strict';

class TestSprite extends Entity {

  constructor(width, height){
    super(width, height);
    this.setSkinSprite('dog');
    this.direction = null;

    //this.addChild(this.skin);
  //  this.interactive = true;
  console.log(this)
  this.resizeHitArea(-60, -50,100, 100);
  this.drawHitArea();
    //GAME.stage.hitArea.on("mousedown", function(){console.log("CLICK!!!")})
  }

  update(){
    if(Input.MOUSE_LEFT_DOWN){
      console.log("ADAD")
      this.moveTo(Input.getPointerPosition());
    }
    else if(this.destination){
      //this.moveTo(this.destination);
    }
  //  this.movePath(true);
    if(Input.ARROW_LEFT){
      this.x -= 2;
    }
    if(Input.ARROW_UP) {
      this.y -= 2;
    }
    if(Input.ARROW_RIGHT){
      this.x += 2;
    }
    if(Input.ARROW_DOWN){
      this.y += 2;
    }
  }

  dispose(){
    console.log("DISPOSE ")
  }

}
