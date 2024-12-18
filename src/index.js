import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Layout from "./components/layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import NotFound from "./components/NotFound/NotFound";
import ComingSoon from "./components/ComingSoon/ComingSoon";
// import ReactGA from 'react-ga';

const root = ReactDOM.createRoot(document.getElementById("root"));
// ReactGA.initialize(process.env.REACT_APP_GOOGLE_TRACKING_ID);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <App />
            </Layout>
          }
          exact
        />
        <Route path="/about" element={<About />} exact />
        <Route path="/experience" element={<Experience />} exact />
        <Route path="/projects" element={<ComingSoon />} exact />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
