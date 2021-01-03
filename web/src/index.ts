import { UserEdit } from './views/UserEdit';
import { User, UserProps } from './models/User';
import { UserList } from './views/UserList';
import { Collection } from './models/Collection';

const rootUrl = 'http://localhost:3000/users';
const users = new Collection<User, UserProps>(rootUrl, (json: UserProps) => {
  return User.buildUser(json);
});

users.on('change', () => {
  const root = document.getElementById('root');

  if (root) {
    new UserList(root, users).render();
  }
});

users.fetch();
