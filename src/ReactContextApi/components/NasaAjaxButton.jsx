import React from 'react';



const SentenceButtonPresentational = props => (
	<div>
		<button onClick={props.getNasaDataAction}>Get A New Nasa Picture</button>
	</div>
);


export default SentenceButtonPresentational;


//<button onClick={props.fetchWord}>{props.sentence}</button>