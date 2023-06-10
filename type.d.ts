export interface TodoType {
  id: string;
  todo: string;
  completed: boolean;
  createdAt: Date;
  user: {
    id: string;
    name: string;
    image: string;
    email: string;
  };
}
