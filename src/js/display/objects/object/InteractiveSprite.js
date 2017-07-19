'use strict';

class InteractiveSprite extends PIXI.Sprite{

  constructor(){
    super();
    this.interactive = true;
    this.shouldUpdate = true;
  }

  update(){
    //override
  }

  onHit(collision){
    console.log(collision)
  }

  dispose(){

  }

}
