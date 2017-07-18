'use strict';

class State extends PIXI.Container{

  constructor(){
    super();
    this.name = ""
    this._layers = new Set();
    this._isCompleted = false;
    this.paused = false;
    this.endStates = new Set("ENDED", "CLEARED", "PAUSED")
  }

  run(){
    this._layers.forEach(function(layer) {
      layer.update();
    });
    this.update();
  }

  update(){
    // override
    console.log("STATE")
  }

  getLayers(){
    return this.children;
  }

  addChild(child){
    if(child instanceof Layer){
      this._layers.add(child);
      super.addChild(child);
    } else {
      console.log("Not a layer", child)
    }
  }

  dispose(){
    this._layers.forEach(function(layer) {
      layer.dispose();
    });
  }

  _stateCompleted(endState){
    this._isCompleted = endState;
  }

  isCompleted(endState){
    return this._isCompleted;
  }
}
