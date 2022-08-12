import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.min.css";
import ScrollTriggerProxy from "./components/ScrollTriggerProxy";
import { AnimatePresence } from "framer-motion";

import Loader from "./components/Loader";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  const containerRef = useRef(null);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 0);
  }, []);

  return (
    <>
      <div className="wrapper" ref={containerRef}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            smartphone: { smooth: true }, // enable smooth scrolling on mobile
            tablet: { smooth: true }, // enable smooth scrolling on tablet
            // direction: "horizontal",
            // multiplier: 0.5,
          }}
          watch={[]}
          containerRef={containerRef}
        >
          <AnimatePresence>{loaded ? null : <Loader />}</AnimatePresence>
          <ScrollTriggerProxy />

          <AnimatePresence>
            <main className="App" data-scroll-container ref={containerRef}>
              <Router>
                <Header />
                <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route exact path="/about">
                    <About />
                  </Route>
                </Switch>
              </Router>
              <Footer />
            </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </div>
    </>
  );
}

export default App;
