'use strict';

class Layer extends PIXI.Container {
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
      if(child instanceof DisplayObject){
        child.dispose();
      }
    });
  }
}
