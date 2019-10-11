import React from 'react';
import { configure, mount } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import LaunchGrid from '../components/LaunchGrid';
import Launch from '../components/Launch';
import LaunchDetails from '../components/LaunchDetails';

import {mockStateNoActiveLaunch, mockStateActiveLaunch} from '../mocks/mockLaunchCollectionStates';

configure({ adapter: new Adapter() });


describe('LaunchGrid Component', () => {
	it('renders without crashing', () => {
		mount(<LaunchGrid {...mockStateNoActiveLaunch}/>);
	  });

	it('Renders A Launch Node for each Launch item in the Mock', () => {
		const numLaunches = mockStateNoActiveLaunch.launches.length;
		const gridMount = mount(<LaunchGrid {...mockStateNoActiveLaunch}/>);
		
		expect(gridMount.find(Launch)).to.have.lengthOf(numLaunches);
	})

	it('Renders an Active Launch Node when given a state that contains one', () => {
		const numLaunches = mockStateActiveLaunch.launches.length;
		const gridMount = mount(<LaunchGrid {...mockStateActiveLaunch}/>);

		expect(gridMount.find(Launch)).to.have.lengthOf(numLaunches-1);
		expect(gridMount.find(LaunchDetails)).to.have.lengthOf(1);
	})
})