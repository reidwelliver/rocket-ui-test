import React from 'react';
import { configure, mount } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import LaunchGrid from '../components/LaunchGrid';
import Launch from '../components/Launch';
import LaunchDetails from '../components/LaunchDetails';
import {VanillaLaunchesView} from '../views/Launches';
import LaunchLoading from '../components/LaunchLoading';
import LaunchLoadingError from '../components/LaunchLoadingError';

import {mockStateNoActiveLaunch, mockStateActiveLaunch} from '../mocks/mockLaunchCollectionStates';

configure({ adapter: new Adapter() });

const metaStateNoActiveLaunch = {
	dispatch: () => {},
	launchCollection: mockStateNoActiveLaunch
}

const metaStateLoading = {
	dispatch: () => {},
	launchCollection: Object.assign({}, mockStateActiveLaunch, {
		fetching: true
	})
}

const metaStateError = {
	dispatch: () => {},
	launchCollection: Object.assign({}, mockStateNoActiveLaunch, {
		fetching: false,
		launches: []
	})
}

describe('Launches View', () => {
	it('renders without crashing', () => {
		mount(<VanillaLaunchesView {...metaStateNoActiveLaunch}/>);
	});

	it('Renders a loading child and no launches when given loading state', () => {
		const launchViewMount = mount(<VanillaLaunchesView {...metaStateLoading}/>);
		
		expect(launchViewMount.find(LaunchLoading)).to.have.lengthOf(1);
		expect(launchViewMount.find(Launch)).to.have.lengthOf(0);
		expect(launchViewMount.find(LaunchDetails)).to.have.lengthOf(0);
	});

	it('Renders an error message when it has no data and is not loading', () => {
		const launchViewMount = mount(<VanillaLaunchesView {...metaStateError}/>);
		
		expect(launchViewMount.find(LaunchLoadingError)).to.have.lengthOf(1);
		expect(launchViewMount.find(Launch)).to.have.lengthOf(0);
		expect(launchViewMount.find(LaunchDetails)).to.have.lengthOf(0);
	});

	it('Renders a Launch Grid when not loading and given data', () => {
		const launchViewMount = mount(<VanillaLaunchesView {...metaStateNoActiveLaunch}/>);
		
		const launchLen = metaStateNoActiveLaunch.launchCollection.launches.length;

		expect(launchViewMount.find(LaunchGrid)).to.have.lengthOf(1);
		expect(launchViewMount.find(Launch)).to.have.lengthOf(launchLen);
		expect(launchViewMount.find(LaunchLoadingError)).to.have.lengthOf(0);
		expect(launchViewMount.find(LaunchLoading)).to.have.lengthOf(0);
	});

})