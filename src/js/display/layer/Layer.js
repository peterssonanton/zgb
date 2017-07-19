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

  addChild(child){
    if(child instanceof InteractiveSprite){
      super.addChild(child);
    } else {
      console.log("Could not add "+child+", must be instance of InteractiveSprite")
    }
  }

  dispose(){
    this.getChildren().forEach(function(child) {
      if(child instanceof InteractiveSprite){
        child.dispose();
      }
    });
  }
}
