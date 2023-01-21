import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserTable.css';

function UserTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get('https://freeconsltancyadminapi.onrender.com/api/users');
        setUsers(res.data);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchUsers();
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Date of birth</th>
          <th>CNIC</th>
          <th>Passport no.</th>
          <th>Matric details</th>
          <th>Inter details</th>
          <th>Bachlores details</th>
          <th>visaPurpose</th>
          <th>Statement of purpose</th>
          <th>IELTS bands</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user._id}>
            <td>{user.name}</td>
            <td>{user.surname}</td>
            <td>{user.dob}</td>
            <td>{user.cnic}</td>
            <td>{user.passport}</td>
            <td>{user.matric}</td>
            <td>{user.inter}</td>
            <td>{user.bachelors}</td>
            <td>{user.visaPurpose}</td>
            <td>{user.statementOfPurpose}</td>
            <td>{user.ieltsBands}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;

