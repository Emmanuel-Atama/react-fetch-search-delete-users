
import { useEffect, useState } from "react";
import  data  from "../../data.json";

const GetUserData = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    setContacts(data);
  }, []);
  return [contacts, setContacts];
};
export default GetUserData;