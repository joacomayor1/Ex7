import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const usersData = [
  {
    id: 1,
    name: 'John Doe',
    description: 'Frontend Developer',
    avatar: 'avatar1.jpg',
    lastUpdate: '2023-06-20',
    score: 10
  },
  {
    id: 2,
    name: 'Jane Smith',
    description: 'Backend Developer',
    avatar: 'avatar2.jpg',
    lastUpdate: '2023-06-19',
    score: 5
  },
  // Add more users as needed
];

const User = ({ user, onVote }) => {
  const { name, description, avatar, lastUpdate, score } = user;

  return (
    <div className="card mb-3">
      <img src={avatar} alt="User Avatar" className="card-img-top" />
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="card-text">{description}</p>
        <p className="card-text">Last Update: {lastUpdate}</p>
        <p className="card-text">Score: {score}</p>
        <button onClick={onVote} className="btn btn-primary">
          Vote
        </button>
      </div>
    </div>
  );
};

const App = () => {
  const [users, setUsers] = useState(usersData);

  const handleVote = (userId) => {
    const updatedUsers = users.map((user) => {
      if (user.id === userId) {
        return {
          ...user,
          score: user.score + 1
        };
      }
      return user;
    });

    setUsers(updatedUsers);
  };

  const sortedUsers = [...users].sort((a, b) => b.score - a.score);

  return (
    <div className="container">
      <h1 className="mt-4">Users</h1>
      {sortedUsers.map((user) => (
        <User
          key={user.id}
          user={user}
          onVote={() => handleVote(user.id)}
        />
      ))}
    </div>
  );
};

export default App;
