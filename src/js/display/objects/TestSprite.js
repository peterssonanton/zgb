'use strict';

class TestSprite extends DisplayObject {

  constructor(shouldUpdate){
    super(shouldUpdate);
    console.log(this)
    this.skin = new PIXI.Sprite(PIXI.Texture.fromImage('assets/58.79.png'));


    this.addChild(this.skin);
  //  this.interactive = true;
    this.on("click", this.test)
  }

  update(){
  //  console.log(this);

  }
  test(){
    console.log("CLIIICK")
  }

  dispose(){
    console.log("DISPOSE ")
  }

}
