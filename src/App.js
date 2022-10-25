import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import HomeFeature from "./features/Home";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<HomeFeature />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
