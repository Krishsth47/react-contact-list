import React from "react";
import { Card } from "./Card";

export const ContactList = () => {
  return (
    <div className="row">
      <div className="col">
        {/* spinner */}
        <div class="d-flex justify-content-center text-primary">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>

        {/* cards  */}

        <Card />
      </div>
    </div>
  );
};
