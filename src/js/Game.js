'use strict';

class Game {

  constructor() {
    this.stage = null;
    this.scale = null;
    this._renderer = null;
    this._input = null;
    this._loadComplete = false;
  }

  _loadGame(){
    this._renderer = new PIXI.autoDetectRenderer(CONFIG.canvas.width, CONFIG.canvas.height, CONFIG.canvas.options);
    document.body.appendChild(this._renderer.view);
    this.stage = new PIXI.Container();
    this._renderer.render(this.stage);

    var self = this;
    PIXI.loader
      .add('dog', 'assets/58.79.png')
      .add('ac', 'assets/ac.png')
      .add('json', 'assets/testtexture.json')
      .add('lab_char', 'assets/lab_char.json')
      .load(function(){
        self._setupGame()
      });
  }

  _setupGame(){
    this.spriteUtilities = new SpriteUtilities(PIXI);
    this.scale = Utils.scaleToWindow(this._renderer.view);
    Input.init(this._renderer, this.scale);

    this._states = new StateController(
      new FirstState('FirstState', 'SecondState'),
      new SecondState('SecondState', 'FirstState'));

    Collision.init(PIXI, this._states);
    this._states.setActiveState('FirstState');
    this._loadComplete = true;
    this.start();
  }

  start(){
    if(this._loadComplete){
      this._gameLoop();
    } else {
      this._loadGame();
    }
  }

  _gameLoop() {
    this._states.update();
    Input.update();
    requestAnimationFrame(this._gameLoop.bind(this));
    this._renderer.render(this.stage);
  }

  moveTo(destination){
    let toX;
    let toY;

    toX = destination.x - this.sprite.x;
    toY = destination.y - this.sprite.y;

    //TODO: 0 / 0 becomes NaN
    let distance = Math.sqrt(toX * toX + toY * toY);
    toX = toX / distance;
    toY = toY / distance;

    this.sprite.x += toX * this.speed;
    this.sprite.y += toY * this.speed;
  }


};
