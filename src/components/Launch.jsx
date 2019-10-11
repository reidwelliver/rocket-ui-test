import React from 'react';
import PropTypes from 'prop-types';
import {LaunchType} from '../Types';

export default function Launch({
	onClick,
	launch,
	launch: {mission_name, flight_number, launch_success, links}
}){

	const onLaunchClick = () => {
		if(onClick){
			onClick(launch);
		}
	}

	return (
		<div className={`launch launch-${launch_success ? 'success': 'failure'}`} onClick={onLaunchClick}>
			<img className="launch-img" src={links.mission_patch_small} alt="SpaceX Mission Patch"/>
			<div className="launch-text-content">
				<h2> { mission_name } </h2>
				<span> Flight Number: { flight_number } </span>
			</div>
		</div>
	);
}

Launch.propTypes = {
	onClick: PropTypes.func.isRequired,
	launch: LaunchType.isRequired
}