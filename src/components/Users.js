import React from "react";
import { useLoaderData } from "react-router-dom";
import { getUsers } from "../api/api";

const Users = () => {
  let userInfo = useLoaderData();
  console.log(userInfo.data);
  return (
    <div className="users">
      <h1>User page</h1>
      <div className="userInfo">
        {userInfo.data.map((user) => (
          <div className="userInfoDetails" key={user.id}>
            <h5>{user.name}</h5>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p className="website">{user.website}</p>
            <span>{user.id}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;

export function usersData() {
  return getUsers();
}
