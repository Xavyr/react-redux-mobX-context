import React from 'react';
import ImagePresentation from '../components/ImagePresentation.jsx';


class NasaImageContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  renderingLogic = () => {
    return this.props.image ? (
      <ImagePresentation image={"imageUrl"} />
    ) : (
      <h3>Click the Ajax Button To Kick Off Async Redux Action</h3>
    );
  }
  render() {
    const image = this.renderingLogic();
    return (
      image
    );
  }
}

//(track) => trackStore.activeTrack = track
// class NasaImageContainer extends Component {
//   constructor(props) {
//     super(props);
//     console.log('props from image container', props);
//   }
//
//   renderingLogic = () => {
//     return 1 ? (
//       <ImagePresentation />
//     ) : (
//       <h3>Click the Ajax Button To Kick Off Async Redux Action</h3>
//     );
//   }
//
//   render() {
//     const spaceImage = this.renderingLogic();
//     return (
//       <div>
//         {spaceImage}
//       </div>
//     )
//   }
//
// }

export default NasaImageContainer;
