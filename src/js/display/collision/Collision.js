'use strict';

class Collision {

  static init(renderer, states){
    this._bump = new Bump(renderer);
    this._states = states;
  }

  static update(){
    let layers = this._states.getActiveState().getLayers();
    var self = this;
    layers.forEach(function(layer) {
      let children = layer.getChildren();
      let collision = self._bump.rectangleCollision(children[0].getHitArea(), children[1].getHitArea(), false);
      //let collision = self._bump.hitTestRectangle(children[0].getHitArea(), children[1].getHitArea());

      if(collision){
        children[0].onHit(collision);
        children[1].onHit(collision);
      }
    });
  }

  static hitDetect(){

  }
}
