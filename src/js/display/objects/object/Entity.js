'use strict';

class Entity extends InteractiveSprite {

  constructor(width, height){
    super();
    this.offsetX = 0;
    this.offsetY = 0;
    this.hitWidth = width;
    this.hitHeight = height;
    this._hitArea = new PIXI.Rectangle(this.offsetX, this.offsetY, this.hitWidth, this.hitHeight);
    this._skin = null; // Movieclip
  }

  getHitArea(){
    this._hitArea.x = this.x + this.offsetX;
    this._hitArea.y = this.y + this.offsetY;
    return this._hitArea;

  }

  drawHitArea(){
    let hitbox = new PIXI.Graphics();
      hitbox.beginFill(0xFF700B, 0.5);
      hitbox.drawRect(this.offsetX, this.offsetY, this.hitWidth, this.hitHeight);
      hitbox.endFill();
      this.addChild(hitbox)
  }

  resizeHitArea(offsetX, offsetY, width, height){
    this.offsetX = offsetX || this.offsetX;
    this.offsetY = offsetY || this.offsetY;
    this.hitWidth = width || this.hitWidth;
    this.hitHeight = height || this.hitHeight;
  }

  setSkin(){
    this._skin = new PIXI.Sprite(PIXI.Texture.fromImage('assets/58.79.png'));
    this.addChild(this._skin);
  }

}
