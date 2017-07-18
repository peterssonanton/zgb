'use strict';

class SecondState extends State {

  constructor(name){
    super();
    this.name = name || this.constructor.name;
    this.layer = new Layer();
    this.addChild(this.layer);
    this.rectangle = null;

    this.setup();
  }

  setup(){
    this.sprite = new TestSprite();
    this.layer.addChild(this.sprite);
    this.sprite.y=200;
  }

  update(){
    console.log("SecondState")
    this.sprite.x += 1;
    if(this.sprite.x > 100){
      this._stateCompleted(ENDSTATES.GAME_OVER);
    }

  }
}
