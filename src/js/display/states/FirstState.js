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
    this.sprite2 = new TestSprite();
  //  console.log(this.sprite)
    this.layer.addChild(this.sprite);
    this.layer.addChild(this.sprite2);
    this.sprite2.y = 450;
    this.sprite2.x = 500;
    this.sprite2.direction = "UP";
    this.sprite.direction = "RIGHT";

  }

  update(){

  }


}
