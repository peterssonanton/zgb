'use strict';

class BackgroundLayer extends PIXI.TilingSprite {
  constructor(texture, width, height){
    super(texture, width, height);
    this.velocityX = 0;
    this.velocityY = 0;
  }

  getChildren(){
    return this.children;
  }

  update(){
    this.tilePosition.x += this.velocityX;
    this.tilePosition.y += this.velocityY;
    this.getChildren().forEach(function(child) {
      if(child.shouldUpdate){
        child.update();
      }
    });
  }

  startScroll(x, y){
    this.velocityX = x;
    this.velocityY = y;
  }

  dispose(){
    this.getChildren().forEach(function(child) {
      if(child instanceof InteractiveSprite){
        child.dispose();
      }
    });
  }
}
