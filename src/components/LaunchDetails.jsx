import React, {createRef, useEffect} from 'react';

const SPACEX_ROCKET_IMG_URL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/CRS-18_Mission_%2848380511427%29.jpg/1280px-CRS-18_Mission_%2848380511427%29.jpg';

function LaunchDetailContent(props){
	if(props.fetching){
		return <div>Loading Details...</div>
	}

	if(!props.details){
		return <div>Error Loading Launch Details</div>
	}

	const {cost_per_launch, rocket_id, description} = props.details;

	const costPerLaunch = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(cost_per_launch);

	return (
		<div className="rocket-details">
			<span>Rocket ID: {rocket_id}</span>
			<span>Cost Per Launch: {costPerLaunch}</span>
			<span>{description}</span>
		</div>
	)
}

export default function LaunchDetails(props){
	const {mission_name, flight_number, launch_success, links} = props.launch;
	const outerRef = createRef();

	const onClick = () => {
		if(props.onClick){
			props.onClick(props.launch);
		}
	}

	useEffect(() => {
		if(outerRef.current){
			outerRef.current.scrollIntoView({
				behavior: 'smooth',
				block: 'center',
			});
		}
	})

	return (
		<div
			className={`launch launch-${launch_success ? 'success': 'failure'} launch-detailed`}
			onClick={onClick}
			ref={outerRef}
		>
			<img className="launch-img" src={SPACEX_ROCKET_IMG_URL}/>
			<div className="launch-text-content">
				<h2> { mission_name } </h2>
				<span> Flight Number: { flight_number }</span>
				<LaunchDetailContent {...props}/>
			</div>
		</div>
	);
}
