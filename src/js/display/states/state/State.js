'use strict';

class State extends PIXI.Container{

  constructor(name, nextState){
    super();
    this.name = name;
    this._nextState = nextState;
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
      console.log("Could not add "+child+", must be instance of Layer")
    }
  }

  dispose(){
    this._layers.forEach(function(layer) {
      layer.dispose();
    });
  }

  stateIsCompleted(nextState){
    this._isCompleted = nextState || Endstates.NEXT;
  }

  isCompleted(){
    return this._isCompleted;
  }

  getNextState(){
    return this._nextState;
  }
}
