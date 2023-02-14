import "./App.css";
import NavBar from "./pages/NavBar.js";
import ProductPage from "./pages/ProductPage";
import BuildingDash from "./Pages/BuildingsDash";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ProductPage />
      <BuildingDash />
    </div>
  );
}

export default App;
