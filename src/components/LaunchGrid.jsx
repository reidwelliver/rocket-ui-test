import React from 'react';
import {activateLaunch, deactivateLaunch} from "../actions/Launches";
import Launch from './Launch';
import LaunchDetails from './LaunchDetails';
import LaunchStoreType from '../Types';


export default function LaunchGrid({dispatch, activeLaunch, launches, fetchingActiveLaunch, activeLaunchData}){
	const onLaunchActivate = (launch) => {
		dispatch(activateLaunch(launch));
	}

	const onLaunchDeactivate = () => {
		dispatch(deactivateLaunch());
	}

    const launchComponents = launches.map(launch => {
		if(activeLaunch && activeLaunch.flight_number === launch.flight_number){
			return (
				<LaunchDetails {...{
					key: launch.flight_number,
					launch,
					fetching: fetchingActiveLaunch,
					details: activeLaunchData,
					onClick: onLaunchDeactivate
				}}/>
			)
		}

		return (
			<Launch {...{
				key: launch.flight_number,
				launch,
				onClick: onLaunchActivate
			}} />
		)
	})

    return <div className="launch-grid">{launchComponents}</div>;
}

LaunchGrid.propTypes = LaunchStoreType;