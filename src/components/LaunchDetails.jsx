import React, {createRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import {RocketDataType, LaunchType} from '../Types';

const SPACEX_ROCKET_IMG_URL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/CRS-18_Mission_%2848380511427%29.jpg/1280px-CRS-18_Mission_%2848380511427%29.jpg';

function LaunchDetailContent({fetching, details, launch}){
	if(fetching){
		return <div>Loading Details...</div>
	}

	if(!details){
		return <div>Error Loading Launch Details</div>
	}

	const {launch_success} = launch;
	const {cost_per_launch, rocket_id, description} = details;

	const costPerLaunch = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(cost_per_launch);

	return (
		<div className="rocket-details">
			<span>Rocket ID: {rocket_id}</span>
			<span>Cost Per Launch: {costPerLaunch}</span>
			<span>This Mission was a {launch_success ? 'Success': 'Failure'}.</span>
			<span>{description}</span>
		</div>
	)
}

export default function LaunchDetails({launch, onClick, details, fetchingActiveLaunch:fetching }){
	const {mission_name, flight_number, launch_success} = launch;

	const outerRef = createRef();
	useEffect(() => {
		if(outerRef.current && outerRef.current.scrollIntoView){
			outerRef.current.scrollIntoView({
				behavior: 'smooth',
				block: 'center',
			});
		}
	})

	const onDetailClick = () => {
		if(onClick){
			onClick(launch);
		}
	}

	return (
		<div
			className={`launch launch-${launch_success ? 'success': 'failure'} launch-detailed`}
			onClick={onDetailClick}
			ref={outerRef}
		>
			<img className="launch-img" src={SPACEX_ROCKET_IMG_URL} alt="Photograph of SpaceX Rocket"/>
			<div className="launch-text-content">
				<h2> { mission_name } </h2>
				<span> Flight Number: { flight_number }</span>
				<LaunchDetailContent {...{
					fetching,
					details,
					launch
				}}/>
			</div>
		</div>
	);
}

LaunchDetailContent.propTypes = {
	fetching: PropTypes.bool.isRequired,
	details: RocketDataType,
	launch: LaunchType.isRequired
}

LaunchDetailContent.defaultProps = {
	details: null
}

LaunchDetails.propTypes = {
	launch: LaunchType.isRequired,
	onClick: PropTypes.func.isRequired,
	details: RocketDataType,
	fetchingActiveLaunch: PropTypes.bool.isRequired
}

LaunchDetails.defaultProps = {
	details: null
}