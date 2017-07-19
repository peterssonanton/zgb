'use strict';

class FirstState extends State {

  constructor(name, nextState){
    super(name, nextState);
    //this.name = name || this.constructor.name;
    this.layer = new Layer();
    this.layer2=new Layer();
    this.layer.on("click", this.test)
    this.addChild(this.layer);
    this.addChild(this.layer2);

    this.rectangle = null;

    this.setup();
  }
  test(){
    console.log("ERARERE")
  }
  setup(){

    this.sprite = new TestSprite();
    this.sprite2 = new TestSprite();
    this.sprite3 = new TestSprite();

  //  console.log(this.sprite)
    this.layer.addChild(this.sprite);
    this.layer2.addChild(this.sprite2);
    this.layer2.addChild(this.sprite3);
    this.sprite3.name ="THRIRD";

    this.sprite2.name ="SECOND";
    this.sprite.name ="FIRST";
    this.sprite3.y = 500;
    this.sprite3.x = 600;
    this.sprite3.direction = "UP";
    this.sprite2.y = 450;
    this.sprite2.x = 500;
    this.sprite2.direction = "UP";
    this.sprite.direction = "RIGHT";

  }

  update(){

    let c = Collision.hitTestSprite(this.sprite, this.sprite2);
  //  console.log("AAAAAAA", c)

    if(c){
      this.stateIsCompleted();
    }
  }


}
