import React from "react";
import "./card.css";

export const Card = ({ user }) => {
  return (
    <div className="col-md-6 col-lg-3 py-3">
      <div class="card">
        <img src={user.picture.large} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">
            {user.name.title} {user.name.first} {user.name.last}
          </h5>
          <p class="card-text">
            <ul className="list-unstyled">
              <li>
                <i class="fa-solid fa-phone"></i> {user.cell}
              </li>
              <li>
                <i class="fa-solid fa-envelope"></i> {user.email}
              </li>
              <li>
                <i class="fa-solid fa-map-location-dot"></i>{" "}
                {user.location.country}
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};
