import React from "react";

const FormInput = ({ user, handleAddForm, handleFormSubmit }) => {
  return (
<>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Name
        </span>
        <input
          className="form-control"
          type="text"
          name="name"
          required
          placeholder="Enter name..."
          aria-describedby="basic-addon1"
          value={user.name}
          onChange={handleAddForm}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          User Name
        </span>
        <input
          className="form-control"
          type="text"
          name="username"
          required
          placeholder="Enter username..."
          aria-describedby="basic-addon1"
          value={user.username}
          onChange={handleAddForm}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          User Email
        </span>
        <input
          className="form-control"
          type="text"
          name="email"
          required
          placeholder="Enter email..."
          aria-describedby="basic-addon1"
          value={user.email}
          onChange={handleAddForm}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          City
        </span>
        <input
          className="form-control"
          type="text"
          name="address"
          required
          placeholder="Enter address..."
          aria-describedby="basic-addon1"
          value={user.address}
          onChange={handleAddForm}
        />
      </div>
      <button type="submit" className="btn btn-outline-success" onClick={handleFormSubmit}>
        Add New User
      </button>
      </>
  );
};

export default FormInput;
