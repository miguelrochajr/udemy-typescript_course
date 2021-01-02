import { UserForm } from './views/UserForm';
import { User } from './models/User';

const rootElement = document.getElementById('root');
const user = User.buildUser({ name: 'Miguel', age: 27 });

const userForm = new UserForm(rootElement, user);
userForm.render();
