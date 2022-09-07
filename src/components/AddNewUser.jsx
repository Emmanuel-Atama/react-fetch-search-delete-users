import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { nanoid } from "nanoid";
import FormInput from "./FormInput";

const AddNewUser = ({ contacts, setContacts }) => {
  const [user, setUser] = useState({
    id: nanoid(),
    name: "",
    username: "",
    email: "",
    address: "",
  });
  // console.log("user: ", user);
  const handleAddForm = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setContacts([...contacts, user]);
  };

  return (
    <FormInput
      user={user}
      handleAddForm={handleAddForm}
      handleFormSubmit={handleFormSubmit}
    />
  );
};
export default AddNewUser;
