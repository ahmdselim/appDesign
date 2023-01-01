import React from "react";
import Comments from "./components/Comments";
import Featuers from "./components/Featuers";
import Footer from "./components/Footer";
import Head from "./components/Head";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

const App = () => {
  return (
    <div className="container">
      <div className="head">
        <Navbar />
        <Head />
      </div>
      <Featuers />
      <Info />
      <Products />
      <Comments />
      <Footer />
    </div>
  );
};

export default App;
