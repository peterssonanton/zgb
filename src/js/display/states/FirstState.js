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
    //this.sprite2 = new TestSprite();
    this.sprite.position.x = 500;
    this.sprite.position.y=400;
  //  console.log(this.sprite)
    this.layer.addChild(this.sprite);

    this.sprite.setPathToMove({x:200, y:2}, {x:1,y:400});

    //let texture = PIXI.Texture.fromImage(PIXI.loader.resources.ac.texture);
    // this.s = PIXI.Sprite.fromImage(PIXI.loader.resources.ac.texture);
    // this.s.position.x = x;
    // this.s.position.y = y;
    // this.s.alpha = 0.5;
    // GAME.stage.addChild(this.s)
  }

  update(){
    // let c = Collision.hitTestSprite(this.sprite, this.sprite2);
  //  console.log("AAAAAAA", c)

    if(this.sprite.y > 600){
      console.log("COMPLETED")
      this.sprite.y = 599;
      this.stateIsCompleted();
    }
  }


}
