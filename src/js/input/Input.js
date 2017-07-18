'use strict';

class Input extends PIXI.interaction.InteractionManager{

  constructor(renderer, options){
    super(renderer, options);
    this.initKeys();
  }

  initKeys(){
    this.ARROW_UP = false;
    this.ARROW_DOWN = false;
    this.ARROW_LEFT = false;
    this.ARROW_RIGHT = false;
  }

  getControls(){

  }

  pressed(key){
    return this.key;
  }

  pressedOnce(key){
    let ret = this.key;
    this.initKeys();
    return ret;
  }

  _keyDownHandler(){

  }

  _keyUpHandler(){

  }
}
