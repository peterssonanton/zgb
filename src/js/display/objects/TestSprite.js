'use strict';

class TestSprite extends Entity {

  constructor(){
    super(64,64);
    this.skin = new PIXI.Sprite(PIXI.Texture.fromImage('assets/58.79.png'));
this.direction = null;

    this.addChild(this.skin);
  //  this.interactive = true;
  console.log(this)
  this.resizeHitArea(100, 100);
  this.drawHitArea();
    //GAME.stage.hitArea.on("mousedown", function(){console.log("CLICK!!!")})
  }

  update(){
  //  console.log(Input.getPointerPosition(), this.getHitArea())
    if(this.direction=="UP"){
      this.y -= 1;
    } else {
      this.x += 1;
    }
    if(this.x > 600){
      this.x = 0;
    }
  //  console.log(this);
    if(Input.MOUSE_LEFT_DOWN){
      if(GAME.bump.hitTestPoint(Input.getPointerPosition(), this.getHitArea())){
        console.log("HIT!!!")
      }
    }
  }
  test(e){
    console.log("CLIIICK")
  }

  dispose(){
    console.log("DISPOSE ")
  }

}
