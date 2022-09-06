// import Axios from "axios";
import { useState } from "react";
import  data  from "../../data.json";

const GetUserData = () => {
  const [users, setUsers] = useState(data);

  // const fetchUsers = async () => {
  //   try {
  //     const response = await Axios.get(
  //       "https://jsonplaceholder.typicode.com/users"
  //     );
  //     console.log(response.data);
  //     setUsers(response.data);
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // };

  // useEffect(() => {
  //   fetchUsers();
  // }, []);
  return [users, setUsers];
};
export default GetUserData;