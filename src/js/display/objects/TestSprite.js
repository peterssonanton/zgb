'use strict';

class TestSprite extends Entity {

  constructor(){
    super();
    this.direction = null;

    this.resizeHitArea(-10, -20, 15, 40);
  //  this.drawHitArea();
    var id = PIXI.loader.resources.p2.textures;
    var frames = new Array();
    for(let i = 1; i < 9; i++){
      let frameId = "idle"+i+".png";
      frames.push(frameId);
    }
    PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
     PIXI.settings.SCALE_MODE;


        let s = GAME.spriteUtilities.sprite(frames,0,0);
        console.log(s)
    this.states = {
      idleUp: [2, 3],
      idleLeft: [4,5],
      idleDown: [0,1],
      idleRight: [6, 7]
    };
    s.fps = 2;

    this.setSkinMovieClip(s);
    this.setPathToMove(false,
      {point:{x:600, y:400}, direction:this.states.idleRight},
      {point:{x:300, y:200}, direction:this.states.idleLeft},
      {point:{x:300, y:400}, direction:this.states.idleDown},
      {point:{x:400, y:400}, direction:this.states.idleRight});
  
    this.frames = this.states.idleDown;

  }

  update(){
    if(Input.ARROW_LEFT){
      this.direction = Direction.LEFT;
      this.moveDirection(this.direction);
    }
    if(Input.ARROW_UP) {
      this.direction = Direction.UP;
      this.moveDirection(this.direction);
    }
    if(Input.ARROW_RIGHT){
      this.direction = Direction.RIGHT;
      this.moveDirection(this.direction);
    }
    if(Input.ARROW_DOWN){
      this.direction = Direction.DOWN;
      this.moveDirection(this.direction);
    }

    if(Input.MOUSE_LEFT_DOWN){
        this.direction = Utils.getDirection({x:this.x, y:this.y}, Input.getPointerPosition());
        this.setDestination(Input.getPointerPosition());
    } else {
      this.resetDestination();
    }

    if(Input.MOUSE_RIGHT_DOWN){
      // SHOOT
      this.direction = Utils.getDirection({x:this.x, y:this.y}, Input.getPointerPosition());
      console.log("SHOOT")
    }

    this.move();
    this.setAnimationState(this.direction);
    this.play(this.frames);
    this.direction = null;
  }

  setAnimationState(direction){// fixa fler
    switch(direction){
      case Direction.UP:
      this.frames = this.states.idleUp;
      break;
      case Direction.DOWN:
      this.frames = this.states.idleDown;
      break;
      case Direction.LEFT:
      this.frames = this.states.idleLeft;
      break;
      case Direction.RIGHT:
      this.frames = this.states.idleRight;
      break;
    }
  }

  dispose(){
    console.log("DISPOSE ")
  }

}
