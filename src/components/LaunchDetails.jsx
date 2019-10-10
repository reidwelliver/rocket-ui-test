import React from 'react';

function LaunchDetailContent(props){
	if(props.fetching){
		return <div>Loading Details...</div>
	}

	if(!props.details){
		return <div>Error Loading Launch Details</div>
	}
	console.log(props.details);
	const {cost_per_launch, rocket_id, description} = props.details;

	const costPerLaunch = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(cost_per_launch);

	return (
		<div>
			<span>Rocket ID: {rocket_id}</span>
			<span>Cost Per Launch: {costPerLaunch}</span>
			<span>Rocket ID: {description}</span>
		</div>
	)
}

export default function LaunchDetails(props){
	console.log(props);
	// const {}
	const {mission_name, flight_number} = props.launch;

	const onClick = () => {
		if(props.onClick){
			props.onClick(props.launch);
		}
	}



	return (
		<li onClick={onClick}>
			<h2> { mission_name } </h2>
			<div> Flight Number: { flight_number }</div>
			<LaunchDetailContent {...props}/>
		</li>
	);
}
