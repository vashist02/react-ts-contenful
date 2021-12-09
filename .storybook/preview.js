import React from 'react';
import { addDecorator } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from '../src/store/reducer';
import '../src/styles/App.scss';

const store = createStore(reducer);

addDecorator((story) => (
  <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
));

addDecorator((Store) => (
  <Provider store={store}>
    <Store />
  </Provider>
));

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
