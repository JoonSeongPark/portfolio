import React, { useState } from "react";

import Nav from "./components/nav/Nav";
import Profile from "./components/profile/Profile";

const App = () => {
  const [korean, setKorean] = useState(true);

  return (
    <>
      <Nav setKorean={setKorean} />
      <Profile korean={korean} />
    </>
  );
};

export default App;
