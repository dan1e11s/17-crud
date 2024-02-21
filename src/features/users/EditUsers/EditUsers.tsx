import { setUserToEdit } from '../users-slice';
import { updateUser } from '../user-actions';
import './style.scss';
import { useEditUser } from './use-edit-users';
import { useAppDispatch } from '../../../store';

const EditUsers = () => {
  const dispatch = useAppDispatch();
  const [values, handleInp] = useEditUser();

  return (
    <>
      {values && (
        <div className="edit-form">
          <label>Name</label>
          <input
            value={values.name}
            onChange={handleInp}
            type="text"
            name="name"
          />
          <label>Username</label>
          <input
            value={values.username}
            onChange={handleInp}
            type="text"
            name="username"
          />
          <label>Choose Level</label>
          <select
            defaultValue={values.level}
            onChange={handleInp}
            className="select3"
            name="level"
          >
            <option value="Junior">Junior</option>
            <option value="Middle">Middle</option>
            <option value="Senior">Senior</option>
          </select>
          <button
            className="edit-button"
            onClick={() => {
              dispatch(updateUser(values));
              dispatch(setUserToEdit(null));
            }}
          >
            Save Changes
          </button>
        </div>
      )}
    </>
  );
};

export default EditUsers;
