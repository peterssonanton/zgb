'use strict';

class TestSprite extends Entity {

  constructor(width, height){
    super(width, height);
    //this.setSkinSprite('dog');
    //this.setSkinMovieClip();
    this.direction = null;

    //this.addChild(this.skin);
  //  this.interactive = true;
    console.log(this)
    this.resizeHitArea(0, 0,10, 10);
    this.drawHitArea();

    let id = PIXI.loader.resources.lab_char.textures;
    let frames = [
      id["idle_front_1.png"],
      id["idle_front_2.png"],
      id["idle_front_3.png"],
      id["idle_front_4.png"],
      id["idle_right_1.png"],
      id["idle_right_2.png"],
      id["idle_right_3.png"],
      id["idle_right_4.png"],
      id["idle_left_1.png"],
      id["idle_left_2.png"],
      id["idle_left_3.png"],
      id["idle_left_4.png"],
      id["idle_back_1.png"],
      id["idle_back_2.png"],
      id["idle_back_3.png"],
      id["idle_back_4.png"],
    ];
    let mc = new PIXI.extras.MovieClip(frames);
    let s = GAME.spriteUtilities.sprite(frames,0,0);
    s.states = {
      down: 0,
      left: 2,
      right: 1,
      up: 3,
      walkDown: [0, 3],
      walkLeft: [8, 11],
      walkRight: [4, 7],
      walkUp: [12, 15]
    };
    this.setSkinMovieClip(s);
    this.setPathToMove({x:200, y:0},{x:200, y:200},{x:50, y:400},)
  }

  update(){
    //console.log(this)
    if(Input.MOUSE_LEFT_DOWN){
    //  this._skin.play();
      this.moveTo(Input.getPointerPosition());
    }
    else if(this.destination){

      //this.moveTo(this.destination);
    } else {
  //    this._skin.stop();
    }
   this.movePath(true);
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
