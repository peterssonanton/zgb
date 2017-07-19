'use strict';

class Game {

  constructor() {
    this.stage = null;
    this._renderer = null;
    this._input = null;
    this._loadComplete = false;
  }

  _loadGame(){
    this._renderer = new PIXI.autoDetectRenderer(CONFIG.canvas.width, CONFIG.canvas.height, CONFIG.canvas.options);
    document.body.appendChild(this._renderer.view);
    this.stage = new PIXI.Container();
    this._renderer.render(this.stage);

    Utils.scaleToWindow(this._renderer.view);
    Input.init(this._renderer);

    //load graphics
    this._loadComplete = true;
    this.start();
  }

  start(){
    if(this._loadComplete){
      this._states = new StateController(
        new FirstState('FirstState'),
        new SecondState('SecondState'));
      this._states.setActiveState('FirstState');
      Collision.init(PIXI, this._states);

      this._gameLoop();
    } else {
      this._loadGame();
    }
  }

  _gameLoop() {
    //console.log(this._states.getActiveState())

    if(this._states.getActiveState().isCompleted(ENDSTATES.GAME_OVER)){
      this._states.setActiveState('SecondState');
    }
    this._states.update();
    Input.update();
    Collision.update();
    requestAnimationFrame(this._gameLoop.bind(this));
    this._renderer.render(this.stage);
  }


};
