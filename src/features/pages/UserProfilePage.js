import React from "react";
import Navbar from "../navbar/Navbar";
import UserProfile from "../user/components/UserProfile";

function UserOrdersPage() {
  return (
    <Navbar>
      <h1 className="mx-auto text-2xl">My Profile</h1>
      <UserProfile></UserProfile>
    </Navbar>
  );
}

export default UserOrdersPage;