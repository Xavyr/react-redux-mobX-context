import React, { Component} from 'react';
import ImagePresentation from '../components/ImagePresentation.jsx';
import { observer } from 'mobx-react';
import NasaStore from '../store.js'


const NasaImageContainer = observer(() => {
  // renderingLogic = () => {
  //   return 1 ? (
  //     <ImagePresentation />
  //   ) : (
  //     <h3>Click the Ajax Button To Kick Off Async Redux Action</h3>
  //   );
  // }
  return (
    <ImagePresentation
      image = {NasaStore.image}
    />
  );
})

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
