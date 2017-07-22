'use strict';

class Input {

  static init(renderer, scale){
    this._tink = new Tink(PIXI, renderer.view, scale);
    this._initKeys();
    this._pointer = this._tink.makePointer();

    this._keyLeft = this._tink.keyboard(37);
    this._keyUp = this._tink.keyboard(38);
    this._keyRight = this._tink.keyboard(39);
    this._keyDown = this._tink.keyboard(40);

    // Disable the default right-click
    renderer.view.addEventListener('contextmenu', (event) => {
      event.preventDefault();
    });
  }

  static _initKeys(){
    this.ARROW_LEFT = false;
    this.ARROW_UP = false;
    this.ARROW_RIGHT = false;
    this.ARROW_DOWN = false;

    this.MOUSE_LEFT_DOWN = false;
    this.MOUSE_RIGHT_DOWN = false;
  }

  static update(){
    this._tink.update();

    this.MOUSE_RIGHT_DOWN = this._pointer.rightDown;
    this.MOUSE_LEFT_DOWN = this._pointer.isDown;

    this.ARROW_LEFT = this._keyLeft.isDown;
    this.ARROW_UP = this._keyUp.isDown;
    this.ARROW_RIGHT = this._keyRight.isDown;
    this.ARROW_DOWN = this._keyDown.isDown;
  }

  static getPointerPosition(){
    console.log("===========")
        console.log("===========")
    console.log("===========")

    console.log(this._pointer.x, this._pointer.y)
    console.log(new PIXI.Point(this._pointer.x, this._pointer.y));
    console.log("===========")
    console.log("===========")
    console.log("===========")

    return new PIXI.Point(this._pointer.x, this._pointer.y);
  }

}
