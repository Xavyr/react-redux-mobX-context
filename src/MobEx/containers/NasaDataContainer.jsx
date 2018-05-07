import React, { Component} from 'react';
import NasaDataPresentation from '../components/NasaDataPresentation.jsx';
import { observer } from 'mobx-react';


@observer class NasaDataContainer extends Component {
  constructor(props) {
    console.log('data container props', props);
    super(props);
  }

  renderingLogic () {
    return this.props.nasaData.showFlag && this.props.nasaData.title ? (
      <NasaDataPresentation title={this.props.nasaData.title} date={this.props.nasaData.date} explanation={this.props.nasaData.explanation} />
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