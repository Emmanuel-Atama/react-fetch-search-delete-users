export default function TableBody({ user, deleteUser }) {
    return (
      <tbody key={user.id}>
        <tr>
          <td>{user.id}</td>
          <td>Name: {user.name}</td>
          <td>UserName: {user.username}</td>
          <td>Email: {user.email}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => deleteUser(user.id)}
            >
              <strong>Delete</strong>
            </button>
          </td>
        </tr>
      </tbody>
    );
  }
  