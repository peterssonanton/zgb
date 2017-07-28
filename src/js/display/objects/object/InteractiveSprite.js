'use strict';

class InteractiveSprite extends PIXI.Sprite{

  constructor(texture){
    super(texture);
    this.interactive = true;
    this.shouldUpdate = true;

    this.offsetX = 0;
    this.offsetY = 0;
    this.hitWidth = 0;
    this.hitHeight = 0;
    this._hitArea = new PIXI.Rectangle(this.offsetX, this.offsetY, this.hitWidth, this.hitHeight);

    this.destination;
    this.direction;

    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.accelerationX = 0;
    this.accelerationY = 0;
    this.frictionX = 1;
    this.frictionY = 1;
    this.speed = 2;
    this.drag = 0.98;
  }

  update(){
    //override
  }

  isHit(collision, hitBy){
    return collision;
  }

  getHitArea(){
    this._hitArea.x = this.x + this.offsetX;
    this._hitArea.y = this.y + this.offsetY;
    this._hitArea.width = this.hitWidth;
    this._hitArea.height = this.hitHeight;
    return this._hitArea;

  }

  drawHitArea(){
    let hitbox = new PIXI.Graphics();
      hitbox.beginFill(0xFF700B, 0.5);
      //hitbox.drawRect(0,0,50,50);
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

  dispose(){

  }

}
