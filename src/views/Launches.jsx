import React, { useEffect } from 'react';
import ConnectedView from './ConnectedView';
import {requestLaunches} from "../actions/Launches";
import LaunchLoadingError from '../components/LaunchLoadingError';
import LaunchLoading from '../components/LaunchLoading';
import LaunchGrid from '../components/LaunchGrid';

function LaunchContent(props){
	const { launchCollection, dispatch } = props;
	const {	activeLaunch, launches, fetching, fetchingActiveLaunch, activeLaunchData } = launchCollection;

	if (!launchCollection || fetching) return <LaunchLoading/>

	if (!launches.length) return <LaunchLoadingError/>
  
	return <LaunchGrid {...{dispatch, activeLaunch, launches, fetchingActiveLaunch, activeLaunchData}}/>
}

function VanillaLaunchesView(props){
	const {dispatch} = props;

	useEffect(() => {
		dispatch(requestLaunches())
	}, []);

    return (
		<div>
		  <h2 className="title-header"> SpaceX launches</h2>
		  <LaunchContent {...props}/>
		</div>
	);
}

const ConnectedLaunchesView = ConnectedView(VanillaLaunchesView, 'launches');

export {
	VanillaLaunchesView,
	ConnectedLaunchesView as default
}
