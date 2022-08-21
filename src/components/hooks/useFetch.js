import Axios from "axios";
import { useEffect, useState } from "react";

const GetUserData = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const responce = await Axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(responce.data);
      setUsers(responce.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return [users, setUsers];
};
export default GetUserData;
