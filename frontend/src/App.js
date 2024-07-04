import "./App.css";
import Menu from "./Components/Menu/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategories from "./Pages/ShopCategories";
import Book from "./Pages/Book";
import Cart from "./Pages/Cart";
import LoginSignUp from "./Pages/LoginSignUp";
import Footer from "./Components/Footer/Footer";
import banner1 from "./Components/Assets/images/banner/banner1.png"
import banner2 from "./Components/Assets/images/banner/banner2.png"
import banner3 from "./Components/Assets/images/banner/banner3.png"
import ShopContextProvider from "./Context/ShopContext";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ShopContextProvider>
          <Menu />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/education" element={<ShopCategories banner={banner1} category="Education" />}></Route>
            <Route path="/comic" element={<ShopCategories banner={banner2} category="Comic" />}></Route>
            <Route path="/technology" element={<ShopCategories banner={banner3} category="Technology" />}></Route>
            <Route path="/book" element={<Book />}>
              <Route path=":bookId" element={<Book />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<LoginSignUp />} />
          </Routes>
          <Footer />
        </ShopContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
