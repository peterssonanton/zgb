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
    console.log(PIXI.settings)

    var self = this;
    PIXI.loader
      .add('dog', 'assets/58.79.png')
      .add('ac', 'assets/ac.png')
      .add('json', 'assets/testtexture.json')
      .add('lab_char', 'assets/lab_char.json')
      .add('p2', 'assets/char.json')
      .add('background', 'assets/bg.png')
      .add('stars', 'assets/bg2.png')
      .load(function(){
        self._setupGame()
      });
  }

  _setupGame(){
    this.spriteUtilities = new SpriteUtilities(PIXI);
    this.scale = Utils.scaleToWindow(this._renderer.view);
    Input.init(this._renderer, this.scale);
    PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

    this._states = new StateController(
      new MenuScreen('Menu', 'Level1'),
      new Level1('Level1'));

    Collision.init(PIXI, this._states);
    this._states.setActiveState('Menu');
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
