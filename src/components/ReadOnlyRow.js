// import { useContext } from 'react';
// import { AppContext } from './RenderUserList';

const ReadOnlyRow = ({user, handleDeleteUser, handleEditClick }) => {

  // const {user, handleDeleteUser } = useContext(AppContext)
    return (
      <tbody key={user.id} >
        <tr>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.address}</td>
          <td>
            <button className="btn btn-warning" onClick={handleEditClick} >
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={() => handleDeleteUser(user.id)}
            >
              <strong>Delete</strong>
            </button>
          </td>
        </tr>
      </tbody>
    );
  }
  export default ReadOnlyRow