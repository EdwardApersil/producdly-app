import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Products from "./Components/Products";
import Customer from "./Components/Customer";
import Pricing from "./Components/Pricing";
import Product from "./Components/Product";
import Marketer from "./Components/Marketer";
import Resources from "./Components/Resources";
import Footer from "./Components/Footer";



function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index  element={<Hero />} />
          <Route path="/" element={<Products />} />
          
        </Routes>
      </BrowserRouter> */}
      <Navbar />
      <Hero />
      <Products />
      <Customer />
      <Product />
      <Marketer />
      <Pricing />
      <Resources />
      <Footer />
    </>
  );
}

export default App;
