import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import ProductPage from "./Pages/ProductPage";
import Contact from "./Pages/Contact";
import NoPage from "./Pages/NoPage";
import Login from "./Pages/Login";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import BuildingDash from "./Pages/BuildingsDash";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProductPage />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<BuildingDash />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
