'use strict';

class Dialogue {
    constructor(container){
      this._container = container;
      this._texts = new Array();
    }


    add(text){
      this._texts.push(text);
      return this;
    }

    display(...keys){
      let options = CONFIG.textStyle;
      let texts = keys.slice(0);

      let text = this.fetchMessage(texts[0]);

      let message = new PIXI.Text(text.message, options);

      message.x = text.position.x;
      message.y = text.position.y;
      text.position.container.addChild(message);

      var self = this;
      setTimeout(function(){
         text.position.container.removeChild(message);
         texts.splice(0,1);
         if(texts.length){
           self.display(texts);
         }

      }, text.duration);
    }

    displayOnce(text){
      let options = CONFIG.textStyle;
      let message = new PIXI.Text(text.message, options);

      message.x = position.x;
      message.y = position.y;
      var self=this;
      position.container.addChild(message);
      setTimeout(function(){
        position.container.removeChild(message);
      }, duration)
    }

    displayAll(){
      let keys = new Array();
      for(let i = 0; i < this._texts.length; i++){
        keys.push(this._texts[i].key);
      }
      this.display(keys);
    }

    fetchMessage(key){
      return this._texts.filter(function(text) {
          return text.key == key;
        })[0];
    }
}
