'use strict';

class DisplayObject extends PIXI.Sprite{

  constructor(autoUpdate = true){
    super();
    this.interactive = true;
    this.shouldUpdate = autoUpdate;
  }

  update(){
    //override
  }

  dispose(){

  }

}
