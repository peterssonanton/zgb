'use strict';

class ParticleLayer extends PIXI.ParticleContainer {
  constructor(){
    super();
  }

  getChildren(){
    return this.children;
  }

  update(){
    this.getChildren().forEach(function(child) {
      if(child.shouldUpdate){
        child.update();
      }
    });
  }

  dispose(){
    this.getChildren().forEach(function(child) {
      if(child instanceof InteractiveSprite){
        child.dispose();
      }
    });
  }
}
