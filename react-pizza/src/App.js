import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import PageNotFound from "./Pages/PageNotFound";
import "./scss/app.scss";
import { createContext, useState } from "react";
export const SearchContext = createContext("");

function App() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <SearchContext.Provider value={{searchValue, setSearchValue}}>
      <Router>
        <div className="wrapper">
          <Header />
          <div className="content">
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </SearchContext.Provider>
  );
}

export default App;
