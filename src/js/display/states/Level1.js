'use strict';

class Level1 extends State {

  constructor(name, nextState){
    super(name, nextState);
    //this.name = name || this.constructor.name;

    this.layer = new Layer();
    //  this.stars =  new PIXI.extras.TilingSprite(PIXI.loader.resources.stars.texture,960,640);
    let bg = new InteractiveSprite(PIXI.loader.resources.background.texture);
    this.layer.addChild(bg);
    bg.x = 100;
    let bgLayer = new BackgroundLayer(PIXI.loader.resources.stars.texture, 960, 640);
    bgLayer.startScroll(0.1, 0.2)
    this.addChild(bgLayer)
    this.layer.on("click", this.test)
    this.addChild(this.layer);

    this.rectangle = null;

    this.setup();
  }

  setup(){

    this.sprite = new TestSprite();
    //this.sprite2 = new TestSprite();
    this.sprite.position.x = 500;
    this.sprite.position.y=400;

    this.layer.addChild(this.sprite);

    //this.sprite.setPathToMove({x:200, y:2}, {x:1,y:400});

    //let texture = PIXI.Texture.fromImage(PIXI.loader.resources.ac.texture);
    // this.s = PIXI.Sprite.fromImage(PIXI.loader.resources.ac.texture);
    // this.s.position.x = x;
    // this.s.position.y = y;
    // this.s.alpha = 0.5;
    // GAME.stage.addChild(this.s)
  }

  update(){

    if(this.sprite.y > 600){
      console.log("COMPLETED")
      this.sprite.y = 599;
      this.stateIsCompleted('Menu');
    }
  }


}
