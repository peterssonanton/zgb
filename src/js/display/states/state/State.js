'use strict';

class State extends PIXI.Container{

  constructor(){
    super();
    this.name = ""
    this._layers = new Set();
    this._isCompleted = false;
    this.paused = false;
  }

  reset(options){

  }

  resume(options){

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
    return this._layers;
  }

  addChild(child){
    if((child instanceof Layer) || (child instanceof ParticleLayer)){
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
