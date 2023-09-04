import React from 'react';
import { useUser } from '../../../contexts/UserContext';

const Main: React.FC = () => {
  const { user, loading } = useUser();

  return (
    <div>
      <h1>Main</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>Name: {user?.name}</p>
          <p>Email: {user?.email}</p>
          <p>Phone: {user?.phone}</p>
        </div>
      )}
    </div>
  );
};

export default Main;