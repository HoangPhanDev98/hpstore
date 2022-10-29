import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import CartFeature from "./features/Cart";
import HomeFeature from "./features/Home";
import ProductFeature from "./features/Product";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="" element={<HomeFeature />} />
        <Route path="products/*" element={<ProductFeature />}></Route>
        <Route path="cart" element={<CartFeature />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
