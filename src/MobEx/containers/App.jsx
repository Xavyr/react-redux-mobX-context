import React, { Component } from 'react';


import NasaAjaxButton from '../components/NasaAjaxButton.jsx';
import NasaImageContainer from '../containers/NasaImageContainer.jsx';
import NasaDataContainer from '../containers/NasaDataContainer.jsx';

import { getNasaDataAction } from '../actions.js';


class App extends Component {
	constructor() {
		super();
	}

  render() {
    return (
	    <div>
		    <NasaAjaxButton
          getNasaDataAction = {getNasaDataAction}
		    />
        <NasaImageContainer
          //imageUrl = {this.props.nasaData.image}
        />
        <NasaDataContainer
          //nasaData = {this.props.nasaData}
          //showNasaDataAction = {this.props.showNasaDataAction}
        />
	    </div>
    );
  }
}

export default (App);






