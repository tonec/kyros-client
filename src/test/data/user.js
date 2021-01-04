export const addUser1 = {
  action: 'store',
  entity: 'User',
  data: {
    entities: [
      {
        id: '5b9a30c8dd231e70430bd8cf',
        email: 'test@test.com',
        first_name: 'Testy',
        last_name: 'Tester',
        mobile: '+44 7123 1234',
        profile_pic: { path: 'test.jpg' },
        super: true,
      },
    ],
  },
  meta: {
    transaction: '8289d12c-2b7f-4aa5-adf4-6951c35705eg',
    entity_count: 1,
  },
}

export const addUser2 = {
  action: 'store',
  entity: 'User',
  data: {
    entities: [
      {
        id: '5b9a30c8dd231e70430bd8cg',
        email: 'test2@test.com',
        first_name: 'Testy',
        last_name: 'Tester 2',
        mobile: '+44 7123 1234',
        profile_pic: { path: 'test.jpg' },
        super: true,
      },
    ],
  },
  meta: {
    transaction: '8289d12c-2b7f-4aa5-adf4-6951c35705eg',
    entity_count: 1,
  },
}

export const removeUser1 = {
  action: 'remove',
  entity: 'User',
  meta: {
    entity_count: 1,
  },
  data: {
    entities: [
      {
        id: '5b9a30c8dd231e70430bd8cf',
        email: 'test2@test.com',
        first_name: 'Testy',
        last_name: 'Tester 2',
        mobile: '+44 7123 1234',
        profile_pic: { path: 'test.jpg' },
        super: true,
      },
    ],
  },
}

export const removeUser2 = {
  action: 'remove',
  entity: 'User',
  meta: {
    entity_count: 1,
  },
  data: {
    entities: [
      {
        id: '5b9a30c8dd231e70430bd8cg',
        email: 'test2@test.com',
        first_name: 'Testy',
        last_name: 'Tester 2',
        mobile: '+44 7123 1234',
        profile_pic: { path: 'test.jpg' },
        super: true,
      },
    ],
  },
}

export const user1Result = {
  '5b9a30c8dd231e70430bd8cf': {
    id: '5b9a30c8dd231e70430bd8cf',
    email: 'test@test.com',
    first_name: 'Testy',
    last_name: 'Tester',
    mobile: '+44 7123 1234',
    profile_pic: {
      path: 'test.jpg',
    },
    super: true,
  },
}

export const user2Result = {
  '5b9a30c8dd231e70430bd8cf': {
    id: '5b9a30c8dd231e70430bd8cf',
    email: 'test@test.com',
    first_name: 'Testy',
    last_name: 'Tester',
    mobile: '+44 7123 1234',
    profile_pic: {
      path: 'test.jpg',
    },
    super: true,
  },
  '5b9a30c8dd231e70430bd8cg': {
    id: '5b9a30c8dd231e70430bd8cg',
    email: 'test2@test.com',
    first_name: 'Testy',
    last_name: 'Tester 2',
    mobile: '+44 7123 1234',
    profile_pic: { path: 'test.jpg' },
    super: true,
  },
}
