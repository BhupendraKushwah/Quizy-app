import React, { useEffect, useState } from 'react';

const Admin = () => {
  const [totalUsers, setTotalUser] = useState('');
  const [sortedPlayers, setSortedPLayers] = useState([]);

  useEffect(() => {
    const sortedUser = async () => {
      const url = 'http://localhost:5000/quiz/sorted-scores';
      const response = await fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();
      setTotalUser(data.totalPlayers);
      setSortedPLayers(data.scores);
    };
    sortedUser();
  }, []);

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h2>Admin Dashboard</h2>
      </div>
      <div className="admin-section total-users">
        <p>Total Users: <span>{totalUsers.length}</span></p>
      </div>
      <div className="admin-section total-playing-users">
        <p>Total Playing Users: <span>{sortedPlayers.length}</span></p>
      </div>
      <div className="admin-section sorted-players">
        <h3>Top Players</h3>
        <ul>
          {sortedPlayers.map(player => (
            <li key={player._id} className="player-card">
              <p>{player.user.name}</p>
              <p>Score: {player.score}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Admin;
