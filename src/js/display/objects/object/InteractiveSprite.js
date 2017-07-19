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

  isHit(collision, hitBy){
    return collision;
  //  console.log(this.name, collision, hitBy)
  }

  dispose(){

  }

}
