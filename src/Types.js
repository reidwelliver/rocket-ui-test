import PropTypes from 'prop-types';

export const LaunchType = PropTypes.shape({
	mission_name: PropTypes.string,
	flight_number: PropTypes.number,
	launch_success: PropTypes.bool,
	links: PropTypes.shape({
		mission_patch_small: PropTypes.string
	}).isRequired
})

export const RocketDataType = PropTypes.shape({
	cost_per_launch: PropTypes.number,
	rocket_id: PropTypes.string,
	description: PropTypes.string
})

export const LaunchStoreType = PropTypes.shape({
	dispatch: PropTypes.func,
	activeLaunch: LaunchType,
	launches: PropTypes.arrayOf(LaunchType),
	fetchingActiveLaunch: PropTypes.bool,
	activeLaunchData: RocketDataType
})