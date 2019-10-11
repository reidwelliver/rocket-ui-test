import React from 'react';

export default function Launch(props){

	const {mission_name, flight_number, launch_success, links} = props.launch;
	const onClick = () => {
		if(props.onClick){
			props.onClick(props.launch);
		}
	}

	return (
		<div className={`launch launch-${launch_success ? 'success': 'failure'}`} onClick={onClick}>
			<img className="launch-img" src={links.mission_patch_small}/>
			<div className="launch-text-content">
				<h2> { mission_name } </h2>
				<span> Flight Number: { flight_number } </span>
			</div>
		</div>
	);
}
