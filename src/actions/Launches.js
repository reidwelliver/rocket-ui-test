export const ACTIONS = {
  REQUEST_LAUNCHES: 'REQUEST_LAUNCHES',
  RECEIVE_LAUNCHES: 'RECEIVE_LAUNCHES',
  ACTIVATE_LAUNCH: 'ACTIVATE_LAUNCH',
  RECEIVE_LAUNCH_DETAILS: 'RECEIVE_LAUNCH_DETAILS',
  DEACTIVATE_LAUNCH: 'DEACTIVATE_LAUNCH'
};

export const requestLaunches = () => ({
  type: ACTIONS.REQUEST_LAUNCHES
});

export const receiveLaunches = launches => ({
  type: ACTIONS.RECEIVE_LAUNCHES,
  payload: {
    launches
  }
});

export const activateLaunch = activeLaunch => ({
	type: ACTIONS.ACTIVATE_LAUNCH,
	payload: {
	  activeLaunch
	}
});

export const receiveLaunchDetails = activeLaunchData => ({
	type: ACTIONS.RECEIVE_LAUNCH_DETAILS,
	payload: {
		activeLaunchData
	}
});

export const deactivateLaunch = () => ({
	type: ACTIONS.DEACTIVATE_LAUNCH
});