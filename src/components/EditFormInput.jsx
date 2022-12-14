import React from 'react'

const EditFormInput = ({editForm, handleEditForm, handleEditFormSubmit, handleCancelClick}) => {
  return (
    <tr>
    <td>
      <input
        type="text"
        required="required"
        placeholder="Enter a name..."
        name="name"
        value={editForm.name}
        onChange={handleEditForm}
      />
    </td>
    <td>
      <input
        type="text"
        required="required"
        placeholder="Enter a username..."
        name="username"
        value={editForm.username}
        onChange={handleEditForm}
      />
    </td>
    <td>
      <input
        type="text"
        required="required"
        placeholder="Enter a email..."
        name="email"
        value={editForm.email}
        onChange={handleEditForm}
      />
    </td>
    <td>
      <input
        type="text"
        required="required"
        placeholder="Enter a address..."
        name="address"
        value={editForm.address}
        onChange={handleEditForm}
      />
    </td>
    <td>
      <button
        type="submit"
        className="btn btn-outline-danger"
        onClick={handleEditFormSubmit}
      >
        Save
      </button>
      <button
        type="submit"
        className="btn btn-outline-success"
        onClick={handleCancelClick}
      >
        Cancel
      </button>
    </td>
  </tr>
  )
}

export default EditFormInput