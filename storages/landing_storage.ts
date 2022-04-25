import { createStore } from "redux";

interface lightsActionProps {
  type: string;
  index: number;
}

function lightsReducer(states = [false, false, false, false, false, false], action:lightsActionProps) {
  switch (action.type) {
    case 'light/toggle':
      return states.map((state, index)=>{
        index === action.index ? !state: state
      })
    case 'counter/decremented':
    default:
      return states;
  }
}

export const lightsStore = createStore(lightsReducer);
