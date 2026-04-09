import { useState } from "react";
import { listings as initialListings } from "../data/listings";

function CarList() {
  const [listings, setListings] = useState(initialListings);

  const toggleStatus = (id) => {
    const updated = listings.map((car) =>
      car.id === id
        ? {
            ...car,
            status: car.status === "Active" ? "Flagged" : "Active",
          }
        : car
    );

    setListings(updated);
  };

  return (
  <div style={{ padding: "20px" }}>
    <h2>Listings</h2>

    {listings.map((car) => (
      <div
        key={car.id}
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "10px",
          marginBottom: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <strong>
            {car.make} {car.model}
          </strong>
          <p>€{car.price}</p>
          <p>Status: {car.status}</p>
        </div>

        <button
          onClick={() => toggleStatus(car.id)}
          style={{
            backgroundColor: car.status === "Active" ? "red" : "green",
            color: "white",
            border: "none",
            padding: "8px 12px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {car.status === "Active" ? "Flag" : "Unflag"}
        </button>
      </div>
    ))}
  </div>
);
}

export default CarList;