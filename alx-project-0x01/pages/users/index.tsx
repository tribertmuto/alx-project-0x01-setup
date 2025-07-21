import React from "react";
import Button from "@/components/common/Button";

const UsersPage: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl mb-4">Users</h1>
      <Button title="Add User" />
    </div>
  );
};

export default UsersPage;
