import React from 'react';
import Navbar from '../components/Navbar';

function Profile() {
  const user = {
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    bio: 'A passionate food lover.',
  };

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h1 className="mb-3">Profile</h1>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Bio:</strong> {user.bio}</p>
      </div>
    </>
  );
}

export default Profile;

