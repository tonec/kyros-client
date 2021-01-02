export const createClientResponse = {
  action: 'store',
  entity: 'client',
  meta: {
    entityCount: 1,
  },
  data: {
    entities: [
      {
        name: 'Test client',
        createdAt: '2021-01-02T19:58:30.360Z',
        updatedAt: '2021-01-02T19:58:30.360Z',
        id: '5ff0d0663a330417e4df960b',
      },
    ],
  },
}

export const fetchClientsResponse = {
  action: 'store',
  entity: 'client',
  meta: {
    entityCount: 4,
  },
  data: {
    entities: [
      {
        name: 'Kertzmann - Gulgowski',
        createdAt: '2020-12-25T08:51:02.284Z',
        updatedAt: '2020-12-25T08:51:02.284Z',
        id: '5fe5a7f6af6b0054d44172bf',
      },
      {
        name: 'Stamm Inc',
        createdAt: '2020-12-25T08:51:02.383Z',
        updatedAt: '2020-12-25T08:51:02.383Z',
        id: '5fe5a7f6af6b0054d44172c0',
      },
      {
        name: 'Balistreri, Mayer and Bashirian',
        createdAt: '2020-12-25T08:51:02.387Z',
        updatedAt: '2020-12-25T08:51:02.387Z',
        id: '5fe5a7f6af6b0054d44172c1',
      },
      {
        name: 'Grimes, Gleason and Terry',
        createdAt: '2020-12-25T08:51:02.390Z',
        updatedAt: '2020-12-25T08:51:02.390Z',
        id: '5fe5a7f6af6b0054d44172c2',
      },
    ],
  },
}
