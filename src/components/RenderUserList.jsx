import "../App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TableHead from "./TableHead";
import SerachInput from "./SearchInput";
import GetUserData from "./hooks/useFetch";
import ReadOnlyRow from "../components/ReadOnlyRow";
import EditableRow from "./EditableRow";
import AddNewUser from "./AddNewUser";
import FilterSearch from './utilities/FilterSearch';

const RenderUserList = () => {
  const [contacts, setContacts] = GetUserData();
  const [searchTerm, setSearchTerm] = useState("");
  const [editForm, setEditForm] = useState({
    name: "",
    username: "",
    email: "",
    address: "",
  });

  const filteredUser = FilterSearch(contacts, searchTerm)
  const [editUserId, setEditUserId] = useState(null);

  const handleDeleteUser = (id) => {
    console.log("Inside handEditClick:", id);

    const userToDelete = contacts.filter((user) => user.id !== id);

    setContacts(userToDelete);
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
                // key={user.id}
                  contacts={contacts}
                  setContacts={setContacts}
                  editUserId={editUserId}
                  setEditUserId={setEditUserId}
                  editForm={editForm}
                  setEditForm={setEditForm}
                />
              ) : (
                <ReadOnlyRow
                // key={user.id}
                  user={user}
                  handleDeleteUser={handleDeleteUser}
                 setEditForm={setEditForm}
                 setEditUserId={setEditUserId}
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
