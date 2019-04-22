import React, { useState, useEffect } from "react";

import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import EditUser from "../components/EditUser";
import { BACKEND_BASE_URL } from "../variables";

const Settings = ({ user }) => {
  return (
    <div>
      <Sidebar />
      <div>
        <EditUser user={user} />
      </div>
    </div>
  );
};

export default Settings;
