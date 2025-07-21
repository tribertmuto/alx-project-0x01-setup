import React from 'react';
import { UserProps } from '@/interfaces';

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 m-4 border border-gray-200 hover:shadow-lg transition duration-300">
      <h2 className="text-xl font-bold text-blue-700">{user.name}</h2>
      <p className="text-sm text-gray-600">@{user.username}</p>
      <p className="text-sm text-gray-500">{user.email}</p>

      <div className="mt-4 text-sm">
        <p><span className="font-semibold">Phone:</span> {user.phone}</p>
        <p>
          <span className="font-semibold">Website:</span>{' '}
          <a href={`https://${user.website}`} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
            {user.website}
          </a>
        </p>
        <p><span className="font-semibold">Company:</span> {user.company.name}</p>
        <p><span className="font-semibold">Address:</span> {user.address.street}, {user.address.city}</p>
      </div>
    </div>
  );
};

export default UserCard;
