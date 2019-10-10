import { ACTIONS } from '../actions/Launches';

const initialState = {
  launches: [],
  fetching: false,
  activeLaunch: null,
  fetchingActiveLaunch: false,
  activeLaunchData: null
};

const actionHandlers = {
  [ACTIONS.REQUEST_LAUNCHES]: ({ state }) => ({
    ...state,
    fetching: true
  }),

  [ACTIONS.RECEIVE_LAUNCHES]: ({ state, action }) => ({
    ...state,
    fetching: false,
    launches: [...state.launches, ...action.payload.launches]
  }),

  [ACTIONS.ACTIVATE_LAUNCH]: ({ state, action }) => ({
    ...state,
	fetchingActiveLaunch: true,
	activeLaunch: action.payload.activeLaunch,
	activeLaunchData: null
  }),

  [ACTIONS.RECEIVE_LAUNCH_DETAILS]: ({ state, action }) => ({
    ...state,
	fetchingActiveLaunch: false,
	activeLaunchData: action.payload.activeLaunchData
  }),

  [ACTIONS.DEACTIVATE_LAUNCH]: ({ state, action }) => ({
    ...state,
	activeLaunch: null,
	fetchingActiveLaunch: false,
	activeLaunchData: null
  })
};

export default (state = initialState, action) =>
  actionHandlers[action.type] ? actionHandlers[action.type]({ state, action }) : state;