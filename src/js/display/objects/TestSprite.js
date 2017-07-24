'use strict';

class TestSprite extends Entity {

  constructor(){
    super();
    this.direction = null;

    this.resizeHitArea(-10, -20, 15, 40);
  //  this.drawHitArea();
    var id = PIXI.loader.resources.p2.textures;
    var frames = new Array();
    for(let i = 1; i < 17; i++){
      let frameId = "p2_idle_"+i+".png";
      frames.push(frameId);
    }

        let s = GAME.spriteUtilities.sprite(frames,0,0);
    this.states = {
      idleUp: [0, 3],
      idleLeft: [8, 11],
      idleDown: [4, 7],
      idleRight: [12, 15]
    };
    this.setSkinMovieClip(s);
    this.setPathToMove(
      {point:{x:600, y:400}, direction:this.states.idleRight},
      {point:{x:300, y:200}, direction:this.states.idleLeft},
      {point:{x:300, y:400}, direction:this.states.idleDown},
      {point:{x:400, y:400}, direction:this.states.idleRight});
    this.play(this.states.idleRight);
    let d = new Dialogue(this);

    d.add(
      {key:"TJENA",
      message:"ett meddelande",
      duration:3000,
      position:{x:-50, y:-80, container: this}})
      .add(
      {key:"TJENA2",
      message:"asdasdasdasdasdande",
      duration:3000,
      position:{x:80, y:100, container: this}});

    //.display("adasdasd", 1000, {container:this, x:-50, y:-80});
    d.display("TJENA", "TJENA2")
  }

  update(){
    if(Input.MOUSE_LEFT_DOWN){

      let direction = Utils.getDirection({x:this.x, y:this.y}, Input.getPointerPosition());
      let frames;
      if(direction == Direction.UP) {
        frames = this.states.idleUp;
      }
      else if(direction == Direction.DOWN){
        frames = this.states.idleDown;
      } else if(direction == Direction.RIGHT) {
        frames = this.states.idleRight;
      }
      else if(direction == Direction.LEFT){
        frames = this.states.idleLeft;
      }
      this.play(frames);
      this.moveTo(Input.getPointerPosition());
    }
    else if(this.destination){

    }
    if(Input.MOUSE_RIGHT_DOWN){
      // SHOOT
      console.log("SHOOT")
    }

    if(Input.ARROW_LEFT){
      this.x -= 2;
    }
    if(Input.ARROW_UP) {
      this.y -= 2;
    }
    if(Input.ARROW_RIGHT){
      this.x += 2;
    }
    if(Input.ARROW_DOWN){
      this.y += 2;
    }
  }

  dispose(){
    console.log("DISPOSE ")
  }

}
