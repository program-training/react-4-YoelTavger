import React from 'react';
import { useUser } from '../../../contexts/UserContext';

const Header: React.FC = () => {
  const { user } = useUser();

  return (
    <div>
      <h1>Header</h1>
      <div>
        <span>Username: {user?.username}</span>
      </div>
    </div>
  );
};

export default Header;