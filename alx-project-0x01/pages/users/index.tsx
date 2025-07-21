import { UserProps, UserData } from "@/interfaces";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import React, { useState } from "react";

interface UsersPageProps {
  posts: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [users, setUsers] = useState<UserProps[]>(posts);

  const handleAddUser = (newUser: UserData) => {
    const id = users.length + 1;
    setUsers([...users, { ...newUser, id }]);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold">Users</h1>
        <button
          className="bg-blue-700 text-white px-4 py-2 rounded-full"
          onClick={() => setModalOpen(true)}
        >
          Add User
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>

      {isModalOpen && (
        <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
