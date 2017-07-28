'use strict';

class Entity extends InteractiveSprite {

  constructor(){
    super();

    this._skin = null;
    this._path = new Array();
    this._framesPlaying;
  }


  setSkinSprite(texture){

    this._skin = new PIXI.Sprite(PIXI.loader.resources.dog.texture);
    this.addChild(this._skin);

    this._skin.x = -this._skin.texture.width/2;
    this._skin.y = -this._skin.texture.height/2;
  }

  setSkinMovieClip(movieClip){

    this._skin = movieClip;
    this.addChild(this._skin);

    this._skin.x = -this._skin.texture.width/2;
    this._skin.y = -this._skin.texture.height/2;

  }

  play(frames){
    if(frames != this._framesPlaying){
      this._framesPlaying = frames;
      this._skin.playAnimation(frames)
    }
  }

  stop(){
    this._framesPlaying = [];
  }

  moveDirection(direction){
    if(direction == Direction.UP){
      this.y -= this.speed;
    }
    if(direction == Direction.LEFT){
      this.x -= this.speed;
    }
    if(direction == Direction.DOWN){
      this.y += this.speed;
    }
    if(direction == Direction.RIGHT){
      this.x += this.speed;
    }
  }

  getPosition(){
    return new PIXI.Point(this.x, this.y);
  }

  setPathToMove(...points){
    this._path = points;
  }

  setDestination(destination){
    this.destination = destination;
  }

  move(){
    if(this.destination){
      let toX;
      let toY;

      toX = this.destination.x - this.x;
      toY = this.destination.y - this.y;

      //TODO: 0 / 0 becomes NaN
      let distance = Math.sqrt(toX * toX + toY * toY);
      toX = toX / distance;
      toY = toY / distance;

      this.x += toX * this.speed;
      this.y += toY * this.speed;

      if(Utils.isInRange(this.getPosition(), this.destination, 5)){
        this.resetDestination();
      }
    }
  }

  movePath(repeat, onArrival){ // pause
    if(this._path[0]){
      let destination = this._path[0].point || 0;
      let animation = this._path[0].direction || 0;

      if(destination){
        this.moveTo(destination);
        this.play(animation);
        //if(Collision.hitTestPointRectangle(destination, this.getHitArea())){
        // replace with hittest when hitbox is fixed
        if(Utils.isInRange(this.getPosition(), destination, 10)){
            this._path.splice(0,1);
            this.stop();
          if(onArrival){
              onArrival();
          };
        }
      }
    }
  }

  resetDestination(){
    this.destination=null;
  }
}
