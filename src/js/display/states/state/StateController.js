'use strict';

class StateController {

  constructor(...states){
    this._states = states;
    this._stage = GAME.stage;
    this._activeState = null;
  }

  update(){
    if(!this.getActiveState().paused && !this.getActiveState().isCompleted()){
      this.getActiveState().run();
    }
  }

  setActiveState(stateName){
    let name = stateName.name ? stateName.name : stateName;
    let state = this.getStateByName(name);
    let currentState = this._activeState;

    if(this._activeState){
      currentState.visible = false;
      currentState.dispose()
      this._stage.removeChild(currentState);
    }
    this._activeState = state;
    this._stage.addChild(state);

  }

  getStateByName(name){
    for(var i = 0; i < this._states.length; i++){
      if(this._states[i].name == name){
        return this._states[i];
      }
    }
  }

  getNextState(){
    let index = this._states.indexOf(this._activeState) + 1;
    if (index >= this._states.length){
      index -= 1;
    }
    return this._states[index];
  }


  getActiveState(){
    return this._activeState;
  }

}
