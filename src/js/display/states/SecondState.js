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

  }

  update(){
  

  }
}
