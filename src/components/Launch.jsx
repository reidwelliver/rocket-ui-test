import React from 'react';

export default function Launch(props){

	const {mission_name, flight_number} = props.launch;
	const onClick = () => {
		if(props.onClick){
			props.onClick(props.launch);
		}
	}

	return (
		<li onClick={onClick}>
		<h2> { mission_name } </h2>
		<div> Flight Number: { flight_number } </div>
		</li>
	);
}
