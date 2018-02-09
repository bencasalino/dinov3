import React from "react";

export default function Listings({ listings }) {
  return (
    <ul id="listings">
      {listings.map(listing => {
        return <p key={listing.description}>{listing.description}</p>;
      })}
    </ul>
  );
}
