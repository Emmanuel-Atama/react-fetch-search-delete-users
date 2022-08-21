import "../App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TableHead from "../components/TableHead";
import TableBody from "../components/TableBody";
import SerachInput from "../components/SearchInput";
import GetUserData from "./hooks/useFetch";

const RenderUserList = (props) => {
  const [users, setUsers] = GetUserData();
  const [searchTerm, setSearchTerm] = useState("");
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const filteredUser = users.filter((user) => {
    return user.username.toLowerCase().includes(searchTerm.toLowerCase());
  });
  return (
    <div className="App">
      <h1 className="text-center fs-3 mt-3"> List Of Users</h1>
      <div className="container px-2">
        <SerachInput setSearchTerm={setSearchTerm} />
        <table className="table table-dark table-hover">
          <TableHead />
          {filteredUser.map((user) => {
            return <TableBody user={user} deleteUser={deleteUser} />;
          })}
        </table>
      </div>
    </div>
  );
};
export default RenderUserList;
