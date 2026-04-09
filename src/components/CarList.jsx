import { useState } from "react";
import { listings as initialListings } from "../data/listings";

function CarList() {
    const [listings, setListings] = useState(initialListings);
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [price, setPrice] = useState("");
    const [search, setSearch] = useState("");

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

    const deleteListing = (id) => {
        const updated = listings.filter((car) => car.id !== id);
        setListings(updated);
    };

    const handleAddListing = (e) => {
        e.preventDefault();

        if (!make || !model || !price) return;

        const newListing = {
            id: Date.now(),
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

    const totalListings = listings.length;
    const activeListings = listings.filter((car) => car.status === "Active").length;
    const flaggedListings = listings.filter((car) => car.status === "Flagged").length;

    const filteredListings = listings.filter((car) =>
        `${car.make} ${car.model}`
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    return (
        <div style={{ padding: "20px" }}>
            <h2>Listings</h2>

            <div
                style={{
                    display: "flex",
                    gap: "15px",
                    marginBottom: "20px",
                    flexWrap: "wrap",
                }}
            >
                <div
                    style={{
                        border: "1px solid #ccc",
                        borderRadius: "8px",
                        padding: "15px",
                        minWidth: "150px",
                    }}
                >
                    <h3>Total Listings</h3>
                    <p>{totalListings}</p>
                </div>

                <div
                    style={{
                        border: "1px solid #ccc",
                        borderRadius: "8px",
                        padding: "15px",
                        minWidth: "150px",
                    }}
                >
                    <h3>Active Listings</h3>
                    <p>{activeListings}</p>
                </div>

                <div
                    style={{
                        border: "1px solid #ccc",
                        borderRadius: "8px",
                        padding: "15px",
                        minWidth: "150px",
                    }}
                >
                    <h3>Flagged Listings</h3>
                    <p>{flaggedListings}</p>
                </div>
            </div>

            <input
                type="text"
                placeholder="Search by make or model..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                    marginBottom: "20px",
                    padding: "8px",
                    width: "100%",
                    maxWidth: "300px",
                }}
            />

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

            {filteredListings.map((car) => (
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

                    <div style={{ display: "flex", gap: "10px" }}>
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

                        <button
                            onClick={() => deleteListing(car.id)}
                            style={{
                                backgroundColor: "#333",
                                color: "white",
                                border: "none",
                                padding: "8px 12px",
                                borderRadius: "5px",
                                cursor: "pointer",
                            }}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CarList;