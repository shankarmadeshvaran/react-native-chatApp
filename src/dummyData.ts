import {Message, User} from './types';

export const user: User[] = [
  {
    _id: '1',
    name: 'Prasath',
    avatar:
      'https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg',
    isActive: false,
  },
  {
    _id: '2',
    name: 'Ankur Mukherjee',
    avatar:
      'https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg',
    isActive: false,
  },
  {
    _id: '3',
    name: 'George Washington',
    avatar:
      'https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg',
    isActive: false,
  },
  {
    _id: '4',
    name: 'Washington DC',
    avatar:
      'https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg',
    isActive: false,
  },
];

export const Messages: Message[] = [
  {
    _id: '1',
    text: 'hello world',
    createdAt: new Date(),
    user: {
      _id: '2',
      name: 'Ankur Mukherjee',
      avatar:
        'https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg',
      isActive: false,
    },
  },
  {
    _id: '2',
    text: 'Hello Ankur',
    createdAt: new Date(),
    user: {
      _id: '1',
      name: 'Prasath',
      avatar:
        'https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg',
      isActive: false,
    },
  },
  {
    _id: '2',
    text: 'How are you',
    createdAt: new Date(),
    user: {
      _id: '1',
      name: 'Prasath',
      avatar:
        'https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg',
      isActive: false,
    },
  },
  {
    _id: '3',
    text: 'Hello George Washington',
    createdAt: new Date(),
    user: {
      _id: '1',
      name: 'Prasath',
      avatar:
        'https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg',
      isActive: false,
    },
  },
  {
    _id: '3',
    text: 'Hi George Washington',
    createdAt: new Date(),
    user: {
      _id: '2',
      name: 'Ankur Mukherjee',
      avatar:
        'https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg',
      isActive: false,
    },
  },
];
