import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import HomeFeature from "./features/Home";
import Header from "./components/Header";
import ProductFeature from "./features/Product";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<HomeFeature />} />
        <Route path="/products/*" element={<ProductFeature />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
