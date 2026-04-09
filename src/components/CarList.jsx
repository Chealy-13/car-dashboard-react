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
    <div>
      <h2>Listings</h2>

      {listings.map((car) => (
        <div key={car.id}>
          <p>
            {car.make} {car.model} - €{car.price} - {car.status}
          </p>

          <button onClick={() => toggleStatus(car.id)}>
            {car.status === "Active" ? "Flag" : "Unflag"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default CarList;