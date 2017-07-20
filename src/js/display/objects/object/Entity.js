'use strict';

class Entity extends InteractiveSprite {

  constructor(width, height){
    super(width, height);

    this._skin = null; // Movieclip
    this._path = new Array();
  }


  setSkinSprite(texture){

    this._skin = new PIXI.Sprite(PIXI.loader.resources.dog.texture);
    this._skin.x = -this._skin.texture.width/2;
    this._skin.y = -this._skin.texture.height/2;
    //this._skin.x = -240/2;
    //this._skin.y = -240/2;
    this.addChild(this._skin);
    console.log(this.texture.width)
  }

  setPathToMove(...points){
    this._path = points;
  }

  moveTo(destination){
    console.log(this._skin.texture.height)

    let toX;
    let toY;

    toX = destination.x - this.x;
    toY = destination.y - this.y;

    //TODO: 0 / 0 becomes NaN
    let distance = Math.sqrt(toX * toX + toY * toY);
    toX = toX / distance;
    toY = toY / distance;

    this.x += toX * this.speed;
    this.y += toY * this.speed;
  }

  getPosition(){
    return new PIXI.Point(this.x, this.y);
  }

  movePath(repeat){
    let destination = this._path[0];
    if(destination){
      this.moveTo(destination);
      console.log(destination, this.x, this.y);

      //if(Collision.hitTestPointRectangle(destination, this.getHitArea())){
      // replace with hittest when hitbox is fixed
      if(Utils.isInRange(this.getPosition(), destination, 10)){
        this._path.splice(0,1);
        if(repeat){
          this._path.push(destination);
        }
      }
    }
  }
}
