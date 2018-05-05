const initialState = {
  title:null,
  copyright: null,
	date: null,
	explanation: null,
	image: null,
  showFlag: false
}

//The action passed into our reducer comes from the dispatch.
const nasaReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_NASA_DATA':
      //we don't every want to mutate the state directly, so we use the spread operator to make a copy
      //and update the properties that matter.
      return { ...state,
        title: action.newNasaData.title,
        copyright: action.newNasaData.copyright,
        date: action.newNasaData.date,
        explanation: action.newNasaData.explanation,
        image: action.newNasaData.url
      }
    case 'SHOW_NASA_DATA':
      if(state.title) {
        return { ...state,
          showFlag: action.showFlag
        }
      }
    default:
      return state;
  }
};




export default nasaReducer;



