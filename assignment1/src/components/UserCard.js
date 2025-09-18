// src/components/UserCard.js
import React from "react";

function UserCard({ user }) {
  const avatarUrl = `https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`;

  return (
    <div className="card shadow-sm">
      <img
        src={avatarUrl}
        alt={user.username}
        className="card-img-top p-3"
        style={{ height: "200px", objectFit: "contain" }}
      />
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <p className="card-text">
          <strong>Email</strong> {user.email} <br />
          <strong>Phone:</strong> {user.phone} <br />
          <strong>Website:</strong> {user.website} <br />
          <strong>Address:</strong> {user.address.street}, {user.address.suite},{" "}
          {user.address.city}, {user.address.zipcode} <br />
          <strong>Company:</strong> {user.company.name}
        </p>
      </div>
    </div>
  );
}

export default UserCard;
