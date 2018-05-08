import React from 'react';

import NasaAjaxButton from '../components/NasaAjaxButton.jsx';
import NasaImageContainer from '../containers/NasaImageContainer.jsx';
import NasaDataContainer from '../containers/NasaDataContainer.jsx';

const AppContext = React.createContext();

//https://stackoverflow.com/questions/49568073/react-context-vs-react-redux-when-should-i-use-each-one?noredirect=1&lq=1&utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa


class App extends React.Component {
	constructor() {
		super();

		this.state = {
		  nasaData: {
		    title: null,
		    date: null,
		    explanation: null,
      },
      showFlag: false,
    }
	}

	showNasaDataAction() {
	  console.log('inside show nasa Data action');
  }

  getNasaDataAction() {
	  console.log('inside get nasa data action');
  }

	componentDidMount() {

  }

  render() {
    return (
	    <AppContext.Provider value={this.state}>
		    <NasaAjaxButton/>
        <NasaImageContainer/>
        <NasaDataContainer/>
	    </AppContext.Provider>
    );
  }
}

export default (App);






