'use strict';

class MenuScreen extends State {

  constructor(name, nextState){
    super(name, nextState);
    this.name = name || this.constructor.name;
    this.layer = new Layer();
    this.addChild(this.layer);

    this.setup();
  }

  setup(){
    let text = new Dialogue(this);

    text.add({
      key:"intro",
      message:"click to start",
      duration:6000,
      position:{
        x:400, y:100, container: GAME.stage}
      });

    text.display("intro");
  }

  update(){
      if(Input.MOUSE_LEFT_DOWN){
        this.stateIsCompleted('Level1');
      }
  }
}
