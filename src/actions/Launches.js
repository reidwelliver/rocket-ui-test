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

export const receiveLaunches = response => ({
  type: ACTIONS.RECEIVE_LAUNCHES,
  payload: {
    launches: response.data
  }
});