'use strict';

class Input {

  static init(renderer){
    this._tink = new Tink(PIXI, renderer.view);
    this._initKeys();
    renderer.view
    this._pointer = this._tink.makePointer();

    // Disable the default right-click
    renderer.view.addEventListener('contextmenu', (event) => {
      event.preventDefault();
    });
  }

  static _initKeys(){
    this.ARROW_UP = false;
    this.ARROW_DOWN = false;
    this.ARROW_LEFT = false;
    this.ARROW_RIGHT = false;

    this.MOUSE_LEFT_DOWN = false;
    this.MOUSE_RIGHT_DOWN = false;
  }

  static update(){
    this._tink.update();

    this.MOUSE_RIGHT_DOWN = this._pointer.rightDown;
    this.MOUSE_LEFT_DOWN = this._pointer.isDown;

  }

  static getPointerPosition(){
    return new PIXI.Point(this._pointer.x, this._pointer.y);
  }

}
