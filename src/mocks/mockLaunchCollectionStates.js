import mockLaunchAPIResponse from './mockLaunchAPIResponse';
import mockRocketAPIResponse from './mockRocketAPIResponse';

export const mockStateNoActiveLaunch = {
	dispatch: () => {},
	activeLaunch: null,
	fetching: false,
	launches: mockLaunchAPIResponse,
	fetchingActiveLaunch: false,
	activeLaunchData: null
}

export const mockStateActiveLaunch = {
	dispatch: () => {},
	fetching: false,
	activeLaunch: mockLaunchAPIResponse[4],
	launches: mockLaunchAPIResponse,
	fetchingActiveLaunch: false,
	activeLaunchData: mockRocketAPIResponse
}