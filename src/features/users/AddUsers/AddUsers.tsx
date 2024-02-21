import './style.scss';
import { useAppDispatch } from '../../../store';
import { createUser } from '../user-actions';
import { useAddUsers } from './use-add-user';

const AddUsers = () => {
  const dispatch = useAppDispatch();
  const [user, handleInp, emptyFields] = useAddUsers();

  return (
    <div className="form">
      <label>Name</label>
      <input type="text" name="name" value={user.name} onChange={handleInp} />
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInp}
      />
      <label>Choose Level</label>
      <select
        defaultValue={user.level}
        className="select1"
        onChange={handleInp}
        name="level"
      >
        <option value="Junior">Junior</option>
        <option value="Middle">Middle</option>
        <option value="Senior">Senior</option>
      </select>
      <button
        className="button"
        onClick={() => {
          dispatch(createUser(user));
          emptyFields();
        }}
      >
        Add new user
      </button>
    </div>
  );
};

export default AddUsers;
