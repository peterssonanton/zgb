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

  // test two sprites against eachother
  static hitTestSprite(sprite1, sprite2){
    let hit = this._bump.rectangleCollision(sprite1.getHitArea(), sprite2.getHitArea(), false);
    if(hit){
      let collisionData = { hit : sprite1, hitBy : sprite2, from : hit};
      sprite1.isHit(collisionData);
      sprite2.isHit({ hit : sprite2, hitBy : sprite1, from : hit});
      return collisionData;
    }
  }

  // test one sprite against a layer of sprites
  static hitTestLayer(sprite, layer){
    let hit;
    let children = layer.getChildren();
    for(let i = 0; i < children.length; i++){
      hit = this._bump.rectangleCollision(sprite.getHitArea(), children[i].getHitArea(), false);
      if(hit){// && children[i].interactive
        let collisionData = { hit : sprite, hitBy : children[i], from : hit};
        sprite.isHit(collisionData);
        return collisionData;
      }
    }
  }

  static hitTestPointRectangle(point, rectangle){
    let hit = this._bump.hitTestPoint(point, rectangle);
    return hit;
  }

  static contain(sprite, container) {
    //Create a `Set` called `collision` to keep track of the //boundaries with which the sprite is colliding
    var collision = new Set();
    //Left
    //If the sprite's x position is less than the container's x position, //move it back inside the container and add "left" to the collision Set
    if (sprite.x < container.x) {
      sprite.x = container.x;
      collision.add("left");
    }

    //Top
    if (sprite.y < container.y) {
      sprite.y = container.y;
      collision.add("top");
    }
    //Right
    if (sprite.x + sprite.width > container.width) {
      sprite.x = container.width - sprite.width;
      collision.add("right");
    }
    //Bottom
    if (sprite.y + sprite.height > container.height) {
      sprite.y = container.height - sprite.height;
      collision.add("bottom");
    }
      //If there were no collisions, set `collision` to `undefined`
    if (collision.size === 0) collision = undefined;
      //Return the `collision` value
      return collision;
    }
}
