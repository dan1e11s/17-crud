import AddUsers from './features/users/AddUsers/AddUsers';
import EditUsers from './features/users/EditUsers/EditUsers';
import UserList from './features/users/UserList/UserList';
import Interaction from './features/controls/Interaction/Interaction';
import { useSelector } from 'react-redux';
import { RootState } from './store';

function App() {
  const { userToEdit } = useSelector((state: RootState) => state.users);

  return (
    <div className="container">
      <h1>CRUD app with TS</h1>
      <div className="flex-row">
        {userToEdit ? <EditUsers /> : <AddUsers />}
        <div>
          <Interaction />
          <UserList />
        </div>
      </div>
    </div>
  );
}

export default App;
