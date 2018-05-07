import React, { Component} from 'react';
import NasaDataPresentation from '../components/NasaDataPresentation.jsx';
import nasaStore from '../store.js';
import { observer } from 'mobx-react';


@observer class NasaDataContainer extends Component {
  constructor(props) {
    super(props);
  }

  renderingLogic () {
    return nasaStore.showFlag && nasaStore.title ? (
      <NasaDataPresentation title={nasaStore.title} date={nasaStore.date} explanation={nasaStore.explanation} />
    ) : (
      <button onClick={this.props.showNasaDataAction}>Click Button To Fire Sync Action and See Nasa Data in State</button>
    );
  }

  render() {
    const nasaData = this.renderingLogic();
    return (
      <div>
        {nasaData}
      </div>
    )
  }
}

export default NasaDataContainer;