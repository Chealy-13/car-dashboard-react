import CarList from "./components/CarList";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f4f6f8",
        display: "flex",
        justifyContent: "center",
        padding: "40px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          backgroundColor: "white",
          borderRadius: "10px",
          padding: "30px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            marginBottom: "20px",
            color: "#111827",
            fontSize: "28px",
            fontWeight: "700",
          }}
        >
          Car Marketplace Dashboard
        </h1>

        <CarList />
      </div>
    </div>
  );
}

export default App;