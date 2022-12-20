import React from "react";
import Layout from "../layout/Layout";
import Loader from "../Loader/Loader";

const About = () => {
  return (
    <Layout>
      <h1 className="max-w-md text-4xl font-bold md:text-5xl text-left">
        About
      </h1>
      <div>
        <Loader />
      </div>
    </Layout>
  );
};

export default About;
