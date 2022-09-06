import "../App.css";
import { createContext, Fragment, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TableHead from "../components/TableHead";
import SerachInput from "../components/SearchInput";
import GetUserData from "./hooks/useFetch";
import ReadOnlyRow from "../components/ReadOnlyRow";
import { EditableRow } from "./EditableRow";
import { AddNewUser } from "./AddNewUser";
import { nanoid } from "nanoid";

export const AppContext = createContext();

const RenderUserList = () => {
  const [users, setUsers] = GetUserData();
  const [searchTerm, setSearchTerm] = useState("");
  const [addForm, setaddForm] = useState({
    name: "",
    username: "",
    email: "",
    address: "",
  });
  const [editForm, setEditForm] = useState({
    name: "",
    username: "",
    email: "",
    address: "",
  });

  const [editUserId, setEditUserId] = useState(null);

  const handleAddForm = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.fieldValue;

    const newForm = { ...addForm };

    newForm[fieldName] = fieldValue;

    setaddForm(newForm);
  };

  const handleAddFormFormSubmit = (e) => {
    e.preventDefault();
    console.log("Inside AddFormSubmit: ", handleAddFormFormSubmit);

    const newUser = {
      id: nanoid(),
      name: addForm.name,
      usename: addForm.username,
      email: addForm.email,
      address: addForm,
    };

    const newUsers = [...users, newUser];

    setUsers(newUsers);
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();

    const editedUser = {
      id: editUserId,
      name: editForm.name,
      usename: editForm.username,
      email: editForm.email,
      address: editForm.address,
    };

    const newUsers = [...users];

    const index = users.findIndex((user) => user.id === editUserId);

    newUsers[index] = editedUser;

    console.log("Inside handEditClick:", handleEditFormSubmit);
    setUsers(newUsers);
  };

  const handleEditClick = (e, user) => {
    e.preventDefault();
    setEditUserId(user.id);

    const formValues = {
      name: user.name,
      username: user.username,
      email: user.email,
      address: user.address,
    };
    setEditForm(formValues);
    setEditUserId(null);
  };

  const handleEditForm = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");

    const fieldValue = e.target.value;

    const newFormData = { ...editForm };
    newFormData[fieldName] = fieldValue;

    setEditForm(newFormData);
  };

  const filteredUser = users.filter((user) => {
    return user.username.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleCancelClick = () => {
    setEditUserId(null);
  };

 

  const handleDeleteUser = (id) => {
    console.log("Inside handEditClick:", handleDeleteUser);

    const userToDelete = users.filter((user) => user.id !== id);

    setUsers(userToDelete);
  };
  return (
    <div className="App container px-2">
      <h1 className="text-center fs-3 mt-3"> List Of Users</h1>
      <SerachInput setSearchTerm={setSearchTerm} />
      <AppContext.Provider
        value={{
          users,
          setUsers,
          searchTerm,
          setSearchTerm,
          setEditForm,
          setEditUserId,
          handleEditFormSubmit,
          handleAddForm,
          handleAddFormFormSubmit,
        }}
      >
        <form onSubmit={handleEditFormSubmit}>
          <table className="table table-hover">
            <TableHead />
            {filteredUser.map((user) => {
              return (
                <Fragment>
                  {editUserId === user.id ? (
                    <EditableRow
                      editForm={editForm}
                      handleEditForm={handleEditForm}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <ReadOnlyRow
                      user={user}
                      handleDeleteUser={handleDeleteUser}
                      handleEditClick={handleEditClick}
                    />
                  )}
                </Fragment>
              );
            })}
          </table>
        </form>
        <div className="new-user">
          <h3>Add New User</h3>
          <AddNewUser />
        </div>
      </AppContext.Provider>
    </div>
  );
};
export default RenderUserList;
