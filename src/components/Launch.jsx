import React from 'react';

export default function Launch(props){

	const {mission_name, flight_number} = props.launch;

	return (
		<li>
		<h2> { mission_name } </h2>
		<div> Flight Number: { flight_number } </div>
		</li>
	);
}
