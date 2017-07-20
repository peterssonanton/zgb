'use strict';

class TestSprite extends Entity {

  constructor(width, height){
    super(width, height);
    this.skin = new PIXI.Sprite(PIXI.Texture.fromImage('assets/58.79.png'));
    this.direction = null;

    this.addChild(this.skin);
  //  this.interactive = true;
  console.log(this)
  this.resizeHitArea(60, 80,100, 100);
  this.drawHitArea();
    //GAME.stage.hitArea.on("mousedown", function(){console.log("CLICK!!!")})
  }

  update(){
    if(Input.ARROW_LEFT) this.x -= 2;
    if(Input.ARROW_UP) this.y -= 2;
    if(Input.ARROW_RIGHT) this.x += 2;
    if(Input.ARROW_DOWN) this.y += 2;
    //  console.log(Input.getPointerPosition(), this.getHitArea())
    // if(this.direction=="UP"){
    //   this.y -= 1;
    // } else {
    //   this.x += 1;
    // }
    // if(this.x > 600){
    //   this.x = 0;
    // }
  }

  dispose(){
    console.log("DISPOSE ")
  }

}
