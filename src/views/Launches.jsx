import React, { Component } from 'react';
import ConnectedView from './ConnectedView';
import {requestLaunches, activateLaunch, deactivateLaunch} from "../actions/Launches";
import Launch from '../components/Launch';
import LaunchDetails from '../components/LaunchDetails';

class LaunchesView extends Component {
  componentDidMount() {
	const {dispatch} = this.props;

    dispatch(requestLaunches())
  }

  getContent() {
	const { launchCollection, dispatch } = this.props;
	const {	activeLaunch, launches, fetching, fetchingActiveLaunch, activeLaunchData } = launchCollection;

    if (!launchCollection || fetching) {
      return <div> LOADING </div>;
    }

    if (!launches.length) {
      return <div> NO DATA </div>;
	}


	const onLaunchActivate = (launch) => {
		dispatch(activateLaunch(launch));
	}

	const onLaunchDeactivate = () => {
		dispatch(deactivateLaunch());
	}

    let launchComponents = launches.map(launch => {
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

    return <ul>{launchComponents}</ul>;
  }

  render() {
    return (
      <div>
        <h2> SpaceX launches </h2>
        {this.getContent()}
      </div>
    );
  }
}

export default ConnectedView(LaunchesView, 'launches');
