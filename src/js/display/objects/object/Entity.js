'use strict';

class Entity extends InteractiveSprite {

  constructor(){
    super();

    this._skin = null;
    this._path = new Array();
    this._framesPlaying;
    this._repeatPath = false;
    this._pathActive = false;
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
    console.log(direction)
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

  setPathToMove(repeat, ...points){
    this._path = points;
    this._repeatPath = repeat;
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
        if(this._pathActive){
          this.updatePath();
        }else {
          this.resetDestination();
        }
      }
    }
  }

  updatePath(){
    if(this._path[1]){
      if(this._repeatPath){
        this._path.push(this._path[0])
      }
      this._path.splice(0,1);
      this.destination = this._path[0].point;
    } else {
      this._pathActive = false;
    }
    // add animation
  }

  movePath(){ // pause
    this.destination = this._path[0].point;
    this._pathActive = true;
  }

  resetDestination(){
    this.destination=null;
  }
}
