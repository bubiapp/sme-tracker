import 'react-native';
import React from 'react';
import { shallow } from 'react-native-testing-library';

import App from '../src/App';

it('renders correctly', () => {
  const comp = shallow(<App />);

  expect(comp.output).toMatchSnapshot();
});
