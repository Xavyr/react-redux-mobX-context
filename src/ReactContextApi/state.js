import React from 'react';

let state = {
  nasaData: {
    title: null,
    date: null,
    explanation: null,
  },
  showFlag: false,
  showNasaDataAction: () => {
    console.log('inside show nasa Data action');
  },
  getNasaDataAction: () => {
    console.log('inside get nasa data action');
  }
}

const StateContext = React.createContext(state);

export default StateContext;