'use strict';

class FirstState extends State {

  constructor(name){
    super();
    this.name = name || this.constructor.name;
    this.layer = new Layer();
    this.layer.on("click", this.test)
    this.addChild(this.layer);
    this.rectangle = null;

    this.setup();
  }
  test(){
    console.log("ERARERE")
  }
  setup(){

    this.sprite = new TestSprite();
  //  console.log(this.sprite)
    this.layer.addChild(this.sprite);
  }

  update(){
    this.sprite.x += 1;
    if(this.sprite.x > 400){
      this._stateCompleted(ENDSTATES.GAME_OVER);
    }
  }


}
