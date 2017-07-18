'use strict';

class Game {

  constructor() {
    this.stage = null;
    this._renderer = null;
    this._state = null;
    this._loadComplete = false;
  }

  _loadGame(){
    this._renderer = new PIXI.autoDetectRenderer(800, 600);
    document.body.appendChild(this._renderer.view);
    this.stage = new PIXI.Container();
    console.log(this.stage)

    // this.stage.interactive = true;
    // this.stage.on("click", function(e){console.log("clickstage", e)})
    this._renderer.render(this.stage);
    Utils.scaleToWindow(this._renderer.view);

    this._loadComplete = true;

    //load graphics
    this.start();
  }

  start(){
    if(this._loadComplete){
      this._states = new StateController(
        new FirstState('FirstState'),
        new SecondState('SecondState'));
      this._states.setActiveState('FirstState');
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
    requestAnimationFrame(this._gameLoop.bind(this));
    this._renderer.render(this.stage);
  }


};
