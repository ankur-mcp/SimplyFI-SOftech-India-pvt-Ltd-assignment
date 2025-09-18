
import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import UserCard from "./components/UserCard";

function App() {
  const [users, setUsers] = useState([]);

  // Fetch API data
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  // Delete user
  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // Edit user (update user details)
  const handleEdit = (id, updatedUser) => {
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  return (
    <div style={{ padding: "20px" }}>
      <Row gutter={[16, 16]}>
        {users.map((user) => (
          <Col xs={24} sm={12} md={8} lg={6} key={user.id}>
            <UserCard user={user} onDelete={handleDelete} onEdit={handleEdit} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default App;
