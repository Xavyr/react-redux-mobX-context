import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../action/actions.js';

import NasaAjaxButton from '../components/NasaAjaxButton.jsx';
import NasaImageContainer from '../containers/NasaImageContainer.jsx';
import NasaDataContainer from '../containers/NasaDataContainer.jsx';

//A key thing to remember is that state is data or functions that are made available to components via props.
//Props can be both actions that dispatch changes to state, or the current state itself.

//Here we map which state of our application applies to which component props.
const mapStateToProps = (store) => {
  return {
    nasaData: store.nasaData,
  }
}

//In redux, there is no way to alter state (the store), without going through a reducer
//and the only way to hit a reducer is through dispatching an action.
//Here we map a given dispatch action to the props of a component we want altered by it.
const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
    getNasaDataAction: actions.getNasaDataAction,
    showNasaDataAction: actions.showNasaDataAction
  }, dispatch)
};


//The top level of our application.
//the various props, including two Action functions and an object with property NasaData
//are available due to the mapping functions above. Now we can pass down only data which we desire a component to have.
class App extends Component {
	constructor() {
		super();
	}

  render() {
    return (
	    <div>
		    <NasaAjaxButton
          getNasaDataAction = {this.props.getNasaDataAction}
		    />
        <NasaImageContainer
          imageUrl = {this.props.nasaData.image}
        />
        <NasaDataContainer
          nasaData = {this.props.nasaData}
          showNasaDataAction = {this.props.showNasaDataAction}
        />
	    </div>
    );
  }
}

//the connect function maps the store's state and dispatch actions to the props of the components in App.
export default connect(mapStateToProps, mapDispatchToProps)(App);






