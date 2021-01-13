/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import 'regenerator-runtime/runtime'
import '@testing-library/jest-dom'
import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { render } from '@testing-library/react'
import apiMiddleware from 'redux/middleware/apiMiddleware'
import reducer from 'redux/rootReducer'

export function renderWith(
  ui,
  {
    route = '/login',
    history = createMemoryHistory({ initialEntries: [route] }),
    state,
    query,
    client = {
      get: () => ({}),
      post: () => ({}),
    },
    ...renderOptions
  } = {},
) {
  const createStore = configureStore([
    apiMiddleware({
      client,
      history,
    }),
  ])

  const initialState = reducer(history)

  initialState.router = {
    location: { query: query || {} },
  }

  const store = createStore({ ...initialState, ...state })

  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <Router history={history}>{children}</Router>
      </Provider>
    )
  }

  return {
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
    history,
    store,
  }
}

export function renderWithStore(
  ui,
  {
    route = '/login',
    history = createMemoryHistory({ initialEntries: [route] }),
    initialState,
    client = {
      get: () => ({}),
      post: () => ({}),
    },
    ...renderOptions
  } = {},
) {
  const createStore = configureStore([
    apiMiddleware({
      client,
      history,
    }),
  ])

  const store = createStore(() => reducer(history), initialState)

  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return render(ui, { wrapper: Wrapper, ...renderOptions })
}

export function renderWithRouter(
  ui,
  {
    route = '/login',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {},
) {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    history,
  }
}
