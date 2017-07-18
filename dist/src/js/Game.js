'use strict';

class MainGame {

  constructor(height, width) {
    this.stage = null;
    this.renderer = null;
    this.renderer = new PIXI.autoDetectRenderer(640, 960);
    document.body.appendChild(this.renderer.view);

  }

};
