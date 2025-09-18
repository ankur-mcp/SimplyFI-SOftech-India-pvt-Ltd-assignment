// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// src/App.js

import React, { useState, useEffect } from "react";
import UserCard from "./components/UserCard";
import "./App.css";

function App() {
  // state for users
  const [users, setUsers] = useState([]);
  // state for loading
  const [loading, setLoading] = useState(true);

  // fetch data from API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") // API URL
      .then((response) => response.json())
      .then((data) => {
        setUsers(data); // save users in state
        setLoading(false); // stop loading
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">User Profiles</h1>

      {loading ? (
        // show loading spinner if still loading
        <div className="d-flex justify-content-center">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="row">
          {users.map((user) => (
            <div className="col-md-4 mb-4" key={user.id}>
              <UserCard user={user} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;

