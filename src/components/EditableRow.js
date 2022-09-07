
const EditableRow = ({ contacts, setContacts, editUserId, setEditUserId, editForm, setEditForm }) => {
console.log("Inside contact in Editable Row: ", contacts)
  console.log("Edit Form: ", editForm);
  const handleEditFormSubmit = (e) => {
    e.preventDefault();

    const userToEdit = {
      id: editUserId,
      name: editForm.name,
      username: editForm.username,
      email: editForm.email,
      address: editForm.address,
    };

    const updatedContact = contacts.map((contact) => {
      if (contact.id !== editUserId) {
        return contact;
      } else {
        return userToEdit;
      }
    });

    setContacts(updatedContact);
    setEditUserId(null);
  };

  const handleEditForm = (e) => {
    const { name, value } = e.target;

    setEditForm({ ...editForm, [name]: value });
  };

  const handleCancelClick = () => {
    setEditUserId(null);
  };

  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="name"
          value={editForm.name}
          onChange={handleEditForm}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a username..."
          name="username"
          value={editForm.username}
          onChange={handleEditForm}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a email..."
          name="email"
          value={editForm.email}
          onChange={handleEditForm}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a address..."
          name="address"
          value={editForm.address}
          onChange={handleEditForm}
        />
      </td>
      <td>
        <button
          type="submit"
          className="btn btn-outline-danger"
          onClick={handleEditFormSubmit}
        >
          Save
        </button>
        <button
          type="submit"
          className="btn btn-outline-success"
          onClick={handleCancelClick}
        >
          Cancel
        </button>
      </td>
    </tr>
  );
};
export default EditableRow;
