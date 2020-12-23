/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render } from '@testing-library/react';
import { GlobalProvider } from '../../../context/GlobalStore';
import FlashContainer from '../FlashContainer';

test('By default the flash component should not render within the container', () => {
  const { queryByTestId } = render(
    <GlobalProvider>
      <FlashContainer />
    </GlobalProvider>,
  );

  const flash = queryByTestId('flash');

  expect(flash).toBeNull();
});

test('If the showFlash action is dispatched the flash should display with the appropriate message', () => {
  const storeValue = {
    flash: {
      visible: true,
      message: 'Test flash message',
    },
  };

  const { getByTestId, getByText } = render(
    <GlobalProvider value={storeValue}>
      <FlashContainer />
    </GlobalProvider>,
  );

  const flash = getByTestId('flash');
  expect(flash).toBeInTheDocument();

  const text = getByText(storeValue.flash.message);
  expect(text).toBeInTheDocument();
});

test('The flash should display the correct icon for info messages', () => {
  const storeValue = {
    flash: {
      visible: true,
      status: 'info',
      message: 'Test flash message',
    },
  };

  const { getByTestId } = render(
    <GlobalProvider value={storeValue}>
      <FlashContainer />
    </GlobalProvider>,
  );

  const icon = getByTestId('icon-info');
  expect(icon).toBeInTheDocument();
});

test('The flash should display the correct icon for error messages', () => {
  const storeValue = {
    flash: {
      visible: true,
      status: 'error',
      message: 'Test flash message',
    },
  };

  const { getByTestId } = render(
    <GlobalProvider value={storeValue}>
      <FlashContainer />
    </GlobalProvider>,
  );

  const icon = getByTestId('icon-error');
  expect(icon).toBeInTheDocument();
});

test('The flash should display the correct icon for success messages', () => {
  const storeValue = {
    flash: {
      visible: true,
      status: 'success',
      message: 'Test flash message',
    },
  };

  const { getByTestId } = render(
    <GlobalProvider value={storeValue}>
      <FlashContainer />
    </GlobalProvider>,
  );

  const icon = getByTestId('icon-success');
  expect(icon).toBeInTheDocument();
});

test('The flash should not render the dismiss button if not dismissable', () => {
  const storeValue = {
    flash: {
      visible: true,
      message: 'Test flash message',
      dismissable: false,
    },
  };

  const { queryByTestId } = render(
    <GlobalProvider value={storeValue}>
      <FlashContainer />
    </GlobalProvider>,
  );

  const dismiss = queryByTestId('button-dismiss');
  expect(dismiss).toBeNull();
});

test('The flash should render the dismiss button if dismissable', () => {
  const storeValue = {
    flash: {
      visible: true,
      message: 'Test flash message',
      dismissable: true,
    },
  };

  const { getByTestId } = render(
    <GlobalProvider value={storeValue}>
      <FlashContainer />
    </GlobalProvider>,
  );

  const dismiss = getByTestId('button-dismiss');
  expect(dismiss).toBeInTheDocument();
});
