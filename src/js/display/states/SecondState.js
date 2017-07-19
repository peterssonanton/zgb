'use strict';

class SecondState extends State {

  constructor(name, nextState){
    super(name, nextState);
    this.name = name || this.constructor.name;
    this.layer = new Layer();
    this.addChild(this.layer);
    this.rectangle = null;

    this.setup();
  }

  setup(){
      this.sprite = new TestSprite();
      this.layer.addChild(this.sprite);
      this.sprite.x = 100;
      this.sprite.y=400
  }

  update(){
      if(this.sprite.x>=550){
        this.stateIsCompleted('FirstState');
      }
  }
}
