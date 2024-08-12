import React from 'react';

interface UserItemProps {
  name: string;
  email: string;
}

const UserItem: React.FC<UserItemProps> = ({ name, email }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
};

export default UserItem;
