import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useLocation, useHistory } from 'react-router-dom';
import { clearAuthData } from '../../../utils/sessionStorage';
import * as actions from '../../../context/actions';
import { useGlobalStore } from '../../../context/GlobalStore';
import Header from '../Header';

jest.mock('react-router-dom', () => ({
  useLocation: jest.fn(),
  useParams: () => ({ id: null }),
  useHistory: jest.fn(),
}));

jest.mock('../../../utils/sessionStorage', () => ({
  getAuthData: jest.fn(),
  clearAuthData: jest.fn(),
}));

jest.mock('../../../context/GlobalStore', () => ({
  useGlobalStore: jest.fn(),
}));

test('The Header menu should not render if on the login page', () => {
  useLocation.mockImplementation(() => ({ pathname: '/login' }));
  useGlobalStore.mockImplementation(() => ({ dispatch: jest.fn() }));

  const { queryByTestId } = render(<Header />);

  const menu = queryByTestId('header-menu');
  expect(menu).toBeNull();
});

test('The Header menu should render if not on the login page', () => {
  useLocation.mockImplementation(() => ({ pathname: '/upload' }));
  useGlobalStore.mockImplementation(() => ({ dispatch: jest.fn() }));

  const { queryByTestId } = render(<Header />);

  const menu = queryByTestId('header-menu');
  expect(menu).toBeInTheDocument();
});

test('The logout button should link to the home screen', () => {
  const mockHistoryPush = jest.fn();
  const mockDispatch = jest.fn();

  useHistory.mockImplementation(() => ({ push: mockHistoryPush }));
  useGlobalStore.mockImplementation(() => ({ dispatch: mockDispatch }));

  const { getByTestId } = render(<Header />);

  const logoutButton = getByTestId('button-logout');

  fireEvent.click(logoutButton);

  expect(mockHistoryPush).toHaveBeenCalledWith('/login');
  expect(clearAuthData).toHaveBeenCalled();
  expect(mockDispatch).toHaveBeenCalledWith({ type: actions.CLEAR_AUTH_USER });
});

test('Click on the help icon should open the help modal', () => {
  const { getByTestId, queryByTestId } = render(<Header />);

  const helpButton = getByTestId('button-help');

  fireEvent.click(helpButton);

  const helpDialog = queryByTestId('dialog-help');

  expect(helpDialog).toBeInTheDocument();
});
