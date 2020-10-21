import React, { useState } from "react";

import Nav from "./components/nav/Nav";
import Profile from "./components/profile/Profile";
import Footer from "./components/footer/Footer";

const App = () => {
  const [korean, setKorean] = useState(true);

  return (
    <>
      <Nav setKorean={setKorean} />
      <Profile korean={korean} />
      <Footer />
    </>
  );
};

export default App;
