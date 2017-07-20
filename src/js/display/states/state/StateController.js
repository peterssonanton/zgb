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
    let next = this.getActiveState().isCompleted();
    if(next){
      this.setActiveState(next);
    }
  }

  setActiveState(name){
    let state = this.getStateByName(name);
    if(!state){
      if(!this.getActiveState().getNextState()){
        state = this.getNextState();
      } else {
        state = this.getStateByName(this.getActiveState().getNextState());
      }
    }

    if(!state.isCompleted || state.canBeResumed){
      state.resume();
      if(this._activeState){
        this._activeState.visible = false;
      }
      this._activeState = state;
      this._activeState.visible = true;
      this._stage.addChild(state);
      console.log(this._states)
    }
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
