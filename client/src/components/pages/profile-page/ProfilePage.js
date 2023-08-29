import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserName, setUserAvatar } from '../../../redux/reducer/userReducer';

export default function Profile() {
  const dispatch = useDispatch();
  const [newName, setNewName] = useState('');
  const [newAvatar, setNewAvatar] = useState('');

  const handleNameChange = () => {
    dispatch(setUserName(newName));
  };
  const handleAvatarChange = () => {
    dispatch(setUserAvatar(newAvatar));
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <div>
        <label>Username:</label>
        <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
        <button onClick={handleNameChange}>Update Username</button>
      </div>
      <div>
        <label>Avatar URL:</label>
        <input type="text" value={newAvatar} onChange={(e) => setNewAvatar(e.target.value)} />
        <button onClick={handleAvatarChange}>Update Avatar</button>
      </div>
    </div>
  );
}