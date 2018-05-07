import React, { Component } from 'react';
import { observer } from 'mobx-react';

import NasaAjaxButton from '../components/NasaAjaxButton.jsx';
import NasaImageContainer from '../containers/NasaImageContainer.jsx';
import NasaDataContainer from '../containers/NasaDataContainer.jsx';
import nasaStore from '../store.js';


import { getNasaDataAction, showNasaDataAction } from '../actions.js';


class App extends Component {
	constructor() {
		super();
	}

	componentDidMount() {

  }

  render() {
    return (
	    <div>
		    <NasaAjaxButton
          getNasaDataAction = {getNasaDataAction}
		    />
        <NasaImageContainer image={nasaStore.image}/>
        <NasaDataContainer
          nasaData = {nasaStore}
          showNasaDataAction = {showNasaDataAction}
        />
	    </div>
    );
  }
}

export default (App);






