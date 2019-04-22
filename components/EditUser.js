import React, { useState } from "react";

import { BACKEND_BASE_URL } from "../variables";

const EditUser = ({ user }) => {
  const [userName, setUserName] = useState(user);
  const handleOnChange = e => setUserName(e.target.value);
  const handleChangeUser = async () => {
    const sendName = await fetch(`${BACKEND_BASE_URL}/user-info`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: userName,
      }),
    });
    console.log(sendName.json());
  };
  return (
    <div>
      <h2>Change User</h2>
      <input
        type='text'
        name='user'
        onChange={handleOnChange}
        value={userName}
      />
      <input
        type='button'
        name='change-user'
        onClick={handleChangeUser}
        value='Change User'
      />
    </div>
  );
};

export default EditUser;
