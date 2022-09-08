import EditFormInput from "./EditFormInput";

const EditableRow = ({
  contacts,
  setContacts,
  editUserId,
  setEditUserId,
  editForm,
  setEditForm,
}) => {
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

    setEditForm((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const handleCancelClick = () => {
    setEditUserId(null);
  };

  return (
    <EditFormInput
      editForm={editForm}
      handleEditForm={handleEditForm}
      handleEditFormSubmit={handleEditFormSubmit}
      handleCancelClick={handleCancelClick}
    />
  );
};
export default EditableRow;
