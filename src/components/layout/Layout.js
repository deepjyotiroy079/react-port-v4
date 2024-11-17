import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <section className="font-inter dark:bg-black m-4 flex flex-col min-h-screen">
        <div className="container max-w-[900px] items-center px-2 mx-auto mt-12 space-y-10 md:space-y-12">
          <Navbar />
          { children }
          <Footer />
        </div>
      </section>
    </>
  );
};

export default Layout;
