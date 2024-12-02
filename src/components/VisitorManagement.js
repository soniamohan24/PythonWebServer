import React, { useState } from 'react';

// The main Visitor Management component
const VisitorManagement = () => {
  const [visitorName, setVisitorName] = useState('');
  const [visitorPurpose, setVisitorPurpose] = useState('');
  const [visitorList, setVisitorList] = useState([]);
  const [filter, setFilter] = useState('');

  // Handle adding a new visitor
  const addVisitor = () => {
    if (visitorName && visitorPurpose) {
      const newVisitor = { name: visitorName, purpose: visitorPurpose };
      setVisitorList([...visitorList, newVisitor]);
      setVisitorName('');
      setVisitorPurpose('');
    }
  };

  // Handle removing a visitor
  const removeVisitor = (name) => {
    const updatedList = visitorList.filter(visitor => visitor.name !== name);
    setVisitorList(updatedList);
  };

  // Handle filtering visitors by name or purpose
  const filteredVisitors = visitorList.filter(
    visitor =>
      visitor.name.toLowerCase().includes(filter.toLowerCase()) ||
      visitor.purpose.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Visitor Management</h2>
      
      <div>
        <input
          type="text"
          value={visitorName}
          onChange={(e) => setVisitorName(e.target.value)}
          placeholder="Visitor Name"
        />
        <input
          type="text"
          value={visitorPurpose}
          onChange={(e) => setVisitorPurpose(e.target.value)}
          placeholder="Purpose"
        />
        <button onClick={addVisitor}>Add Visitor</button>
      </div>
      
      <div>
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Search by name or purpose"
        />
      </div>
      
      <h3>Visitor List</h3>
      <ul>
        {filteredVisitors.map((visitor, index) => (
          <li key={index}>
            <strong>{visitor.name}</strong> - {visitor.purpose}
            <button onClick={() => removeVisitor(visitor.name)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VisitorManagement;
