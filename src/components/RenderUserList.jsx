import "../App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TableHead from "../components/TableHead";
import SerachInput from "../components/SearchInput";
import GetUserData from "./hooks/useFetch";
import ReadOnlyRow from "../components/ReadOnlyRow";
import EditableRow from "./EditableRow";
import AddNewUser from "./AddNewUser";

const RenderUserList = () => {
  const [contacts, setContacts] = GetUserData();
  const [searchTerm, setSearchTerm] = useState("");
  const [editForm, setEditForm] = useState({
    name: "",
    username: "",
    email: "",
    address: "",
  });

  const [editUserId, setEditUserId] = useState(null);

  const handleDeleteUser = (id) => {
    console.log("Inside handEditClick:", id);

    const userToDelete = contacts.filter((user) => user.id !== id);

    setContacts(userToDelete);
  };

  const filteredUser = contacts.filter((user) => {
    const search = user.username.toLowerCase().includes(searchTerm.toLowerCase());
    return search
  });

  const handleEditClick = ( user) => {
    console.log("Inside user: ", user)
    setEditUserId(user.id);

    const formValues = {
      name: user.name,
      username: user.username,
      email: user.email,
      address: user.address,
    };
    setEditForm(formValues);
  };

  return (
    <div className="App container px-2">
      <h1 className="text-center fs-3 mt-3"> List Of Users</h1>
      <SerachInput setSearchTerm={setSearchTerm} />

      <table className="table table-hover">
        <TableHead />
        {filteredUser.map((user) => {
          return (
            <>
              {editUserId === user.id ? (
                    <EditableRow
                    contacts={contacts}
                    setContacts={setContacts}
                    editUserId={editUserId}
                    setEditUserId={setEditUserId}
                    editForm={editForm}
                    setEditForm={setEditForm}
                    />
                  ) : (
                    <ReadOnlyRow
                      user={user}
                      handleDeleteUser={handleDeleteUser}
                      handleEditClick={handleEditClick}
                    />
                  )}
         
            </>
          );
        })}
      </table>

      <div className="new-user">
        <h3>Add New User</h3>
        <AddNewUser contacts={contacts} setContacts={setContacts} />
      </div>
    </div>
  );
};
export default RenderUserList;
