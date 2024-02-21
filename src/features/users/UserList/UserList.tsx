import { useUsers } from '../use-users';
import { useAppDispatch } from '../../../store';
import { deleteUser } from '../user-actions';
import { setUserToEdit } from '../users-slice';
import './style.scss';

const UserList = () => {
  const dispatch = useAppDispatch();
  const [users] = useUsers();

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Level</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user: any) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.level}</td>
            <td>
              <button
                className="muted-button"
                onClick={() => dispatch(setUserToEdit(user))}
              >
                Edit
              </button>
              <button
                className="muted-button"
                onClick={() => dispatch(deleteUser(user.id))}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
