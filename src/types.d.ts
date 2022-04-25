export interface User {
  _id: string;
  name: string;
  avatar: string;
  isActive: boolean;
}

export interface Message {
  _id: string;
  text: string;
  createdAt: Date | number;
  user: User;
}
