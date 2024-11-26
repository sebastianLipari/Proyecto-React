import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer />}
          />
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/category/:categoryId" element={<ItemListContainer/>} />
          <Route path="/product/:productId" element={<ProductDetail/>} />

          <Route path="*" element={<h1>error 404</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
