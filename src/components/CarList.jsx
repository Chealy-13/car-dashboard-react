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
        `${car.make} ${car.model}`.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div style={{ padding: "10px", color: "#1f2937" }}>
            <h2 style={{ marginBottom: "20px", color: "#111827" }}>Listings</h2>

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
                        backgroundColor: "#f9fafb",
                        border: "1px solid #d1d5db",
                        borderRadius: "10px",
                        padding: "16px",
                        minWidth: "160px",
                    }}
                >
                    <h3 style={{ margin: "0 0 8px 0", color: "#374151" }}>Total Listings</h3>
                    <p style={{ margin: 0, fontSize: "24px", fontWeight: "bold", color: "#111827" }}>
                        {totalListings}
                    </p>
                </div>

                <div
                    style={{
                        backgroundColor: "#f9fafb",
                        border: "1px solid #d1d5db",
                        borderRadius: "10px",
                        padding: "16px",
                        minWidth: "160px",
                    }}
                >
                    <h3 style={{ margin: "0 0 8px 0", color: "#374151" }}>Active Listings</h3>
                    <p style={{ margin: 0, fontSize: "24px", fontWeight: "bold", color: "#16a34a" }}>
                        {activeListings}
                    </p>
                </div>

                <div
                    style={{
                        backgroundColor: "#f9fafb",
                        border: "1px solid #d1d5db",
                        borderRadius: "10px",
                        padding: "16px",
                        minWidth: "160px",
                    }}
                >
                    <h3 style={{ margin: "0 0 8px 0", color: "#374151" }}>Flagged Listings</h3>
                    <p style={{ margin: 0, fontSize: "24px", fontWeight: "bold", color: "#dc2626" }}>
                        {flaggedListings}
                    </p>
                </div>
            </div>

            <input
                type="text"
                placeholder="Search by make or model..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                    marginBottom: "20px",
                    padding: "12px",
                    width: "100%",
                    maxWidth: "320px",
                    borderRadius: "8px",
                    border: "1px solid #d1d5db",
                    backgroundColor: "white",
                    color: "#111827",
                }}
            />

            <form
                onSubmit={handleAddListing}
                style={{
                    marginBottom: "25px",
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
                    style={{
                        padding: "12px",
                        borderRadius: "8px",
                        border: "1px solid #d1d5db",
                        minWidth: "140px",
                        backgroundColor: "white",
                        color: "#111827",
                    }}
                />

                <input
                    type="text"
                    placeholder="Model"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    style={{
                        padding: "12px",
                        borderRadius: "8px",
                        border: "1px solid #d1d5db",
                        minWidth: "140px",
                        backgroundColor: "white",
                        color: "#111827",
                    }}
                />

                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    style={{
                        padding: "12px",
                        borderRadius: "8px",
                        border: "1px solid #d1d5db",
                        minWidth: "140px",
                        backgroundColor: "white",
                        color: "#111827",
                    }}
                />

                <button
                    type="submit"
                    style={{
                        backgroundColor: "#2563eb",
                        color: "white",
                        border: "none",
                        padding: "12px 18px",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontWeight: "600",
                    }}
                >
                    Add Listing
                </button>
            </form>

            {filteredListings.map((car) => (
                <div
                    key={car.id}
                    style={{
                        backgroundColor: "white",
                        border: "1px solid #d1d5db",
                        borderRadius: "10px",
                        padding: "16px",
                        marginBottom: "12px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <div>
                        <strong style={{ fontSize: "18px", color: "#111827" }}>
                            {car.make} {car.model}
                        </strong>
                        <p style={{ margin: "8px 0 4px 0", color: "#374151" }}>€{car.price}</p>
                        <p style={{ margin: 0, color: "#6b7280" }}>Status: {car.status}</p>
                    </div>

                    <div style={{ display: "flex", gap: "10px" }}>
                        <button
                            onClick={() => toggleStatus(car.id)}
                            style={{
                                backgroundColor: car.status === "Active" ? "#dc2626" : "#16a34a",
                                color: "white",
                                border: "none",
                                padding: "10px 14px",
                                borderRadius: "8px",
                                cursor: "pointer",
                                fontWeight: "600",
                            }}
                        >
                            {car.status === "Active" ? "Flag" : "Unflag"}
                        </button>

                        <button
                            onClick={() => deleteListing(car.id)}
                            style={{
                                backgroundColor: "#374151",
                                color: "white",
                                border: "none",
                                padding: "10px 14px",
                                borderRadius: "8px",
                                cursor: "pointer",
                                fontWeight: "600",
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