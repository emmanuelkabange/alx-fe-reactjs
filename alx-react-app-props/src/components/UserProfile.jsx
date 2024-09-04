import React, { useContext } from "react";
import UserContext from "./UserContext";

const UserProfile = () => {
  const userData = useContext(UserContext);
  return (
    <div>
      <h2>{userData.name}</h2>
      <p>{userData.age}</p>
    </div>
  );
};

export default UserProfile;
