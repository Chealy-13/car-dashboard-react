import { listings } from "../data/listings";

function CarList() {
  return (
    <div>
      <h2>Listings</h2>
      {listings.map((car) => (
        <div key={car.id}>
          <p>
            {car.make} {car.model} - €{car.price} - {car.status}
          </p>
        </div>
      ))}
    </div>
  );
}

export default CarList;