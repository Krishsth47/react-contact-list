import React from "react";
import { Card } from "./card/Card";

export const ContactList = ({ users }) => {
  return (
    <div className="row">
      {/* spinner */}

      {users.length ? (
        users.map((usr, i) => <Card key={i} user={usr} />)
      ) : (
        <h5>User not found</h5>
      )}
    </div>
  );
};
