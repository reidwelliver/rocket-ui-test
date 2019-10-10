import axios from 'axios';
import {ACTIONS, receiveLaunches, receiveLaunchDetails} from '../actions/Launches';

const SERVICES_URL = 'https://api.spacexdata.com/v3';
const ALL_LAUNCHES_URL = `${SERVICES_URL}/launches`;
const ROCKET_INFO_URL = `${SERVICES_URL}/rockets`

const api = axios.create();

const spacexDataService = store => next => action => {
	const storeState = store.getState();
	const {fetching, launches} = storeState.launchCollection;
	
	next(action)

	switch (action.type){

		case ACTIONS.REQUEST_LAUNCHES:
			if(launches.length || fetching){
				return //fetch not needed - already populated
			}

			api.get(ALL_LAUNCHES_URL).then(response => {
				return next(receiveLaunches(response.data));
			})

			break;
	

		case ACTIONS.ACTIVATE_LAUNCH:
			const {rocket_id} = action.payload.activeLaunch.rocket;

			const launchRocketURL = `${ROCKET_INFO_URL}/${rocket_id}`
			api.get(launchRocketURL).then(response => {
				return next(receiveLaunchDetails(response.data));
			})

			break;

	}
}

export default spacexDataService;
  