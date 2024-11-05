// App.js
import React, { useState, useEffect } from 'react';
import { fetchTickets } from './services/Api';
import DisplayMenu from './components/DisplayMenu';
import KanbanBoard from './components/KanbanBoard';
import './index.css';

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupBy, setGroupBy] = useState('status');
  const [sortBy, setSortBy] = useState('priority');

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchTickets();
      setTickets(data.tickets);
      setUsers(data.users);
    };
    loadData();
  }, []);

  return (
    <div className="App">
      <DisplayMenu setGroupBy={setGroupBy} setSortBy={setSortBy} />
      <KanbanBoard tickets={tickets} users={users} groupBy={groupBy} sortBy={sortBy} />
    </div>
  );
}

export default App;
