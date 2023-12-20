import { useState } from "react";
import {Footer, Grid, Hero, Navbar} from "./components/index.js"

function App() {

  return (
    <>
      {/* navbar component */}
      <Navbar />

      {/* hero component */}
      <Hero />

      {/* grid and search components */}
      <Grid />

      {/* footer */}
      <Footer />
    </>
  );
}

export default App;
