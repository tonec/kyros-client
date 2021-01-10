export const createUserResponse = {
  action: 'store',
  entity: 'user',
  meta: {
    entityCount: 1,
  },
  data: {
    entities: [
      {
        super: false,
        firstName: 'Test',
        lastName: 'Tester',
        email: 'tst@example.com',
        client: '5f04ea6e88e8ca6d4ced664f',
        permissions: 'admin',
        createdAt: '2021-01-06T14:14:15.022Z',
        updatedAt: '2021-01-06T14:14:15.022Z',
        id: '5ff5c5b654b5f95a06d3c01d',
      },
    ],
  },
}

export const fetchUsersResponse = {
  action: 'store',
  entity: 'user',
  meta: { entityCount: 302 },
  data: {
    entities: [
      {
        super: true,
        firstName: 'Lina',
        lastName: 'Hickle',
        email: 'Terrance.Kerluke82@yahoo.com',
        phone: '649.160.5260 x2725',
        client: '5ff5bd36c5c8a55030b825a6',
        createdAt: '2021-01-06T13:44:37.072Z',
        updatedAt: '2021-01-06T13:44:37.072Z',
        id: '5ff5bec50ae19d520e72da44',
      },
      {
        super: true,
        firstName: 'Briana',
        lastName: 'Price',
        email: 'Al_Schimmel7@yahoo.com',
        phone: '667.976.3992 x337',
        client: '5ff5bd36c5c8a55030b825a6',
        createdAt: '2021-01-06T13:44:37.102Z',
        updatedAt: '2021-01-06T13:44:37.102Z',
        id: '5ff5bec50ae19d520e72da45',
      },
      {
        super: false,
        firstName: 'Loyce',
        lastName: 'Blick',
        email: 'Alessandro_Lemke78@yahoo.com',
        phone: '1-363-991-8238',
        client: '5ff5bec40ae19d520e72da3b',
        createdAt: '2021-01-06T13:44:37.113Z',
        updatedAt: '2021-01-06T13:44:37.113Z',
        id: '5ff5bec50ae19d520e72da46',
      },
      {
        super: false,
        firstName: 'Stefanie',
        lastName: 'Corkery',
        email: 'Winfield.Nolan12@yahoo.com',
        client: '5ff5bea3eb160151c1774a8b',
        createdAt: '2021-01-06T13:44:37.122Z',
        updatedAt: '2021-01-06T13:44:37.122Z',
        id: '5ff5bec50ae19d520e72da47',
      },
    ],
  },
}
