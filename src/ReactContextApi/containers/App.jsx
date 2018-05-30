import React, { Component } from 'react';
import NasaDataContainer from './NasaDataContainer.jsx';
import StateContext from '../state.js';

class AppProvider extends Component {
	constructor(props) {
		super(props);
    this.state = {
      nasaData: {
        title: "title",
        date: "date",
        explanation: "explanation",
      },
      showFlag: false,
      showNasaDataAction: () => {
        console.log('inside show nasa Data action');
      },
      getNasaDataAction: () => {
        console.log('inside get nasa data action');
      }
    }

	}

  render() {
    return (
	    <div>
        <StateContext.Provider value={this.state}>
          <NasaDataContainer />
        </StateContext.Provider>
      </div>
    );
  }
}


export default (AppProvider);






