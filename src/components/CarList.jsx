import { useState } from "react";
import { listings as initialListings } from "../data/listings";

function CarList() {
  const [listings, setListings] = useState(initialListings);
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");

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

  const handleAddListing = (e) => {
    e.preventDefault();

    if (!make || !model || !price) return;

    const newListing = {
      id: listings.length + 1,
      make,
      model,
      price: Number(price),
      status: "Active",
    };

    setListings([...listings, newListing]);
    setMake("");
    setModel("");
    setPrice("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Listings</h2>

      <form
        onSubmit={handleAddListing}
        style={{
          marginBottom: "20px",
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        <input
          type="text"
          placeholder="Make"
          value={make}
          onChange={(e) => setMake(e.target.value)}
        />
        <input
          type="text"
          placeholder="Model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Add Listing</button>
      </form>

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