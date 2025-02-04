import { useState } from "react";
import Background from "./components/Background/Background";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const heroData = [
    { text1: "", text2: "" },
    { text1: "", text2: "" },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  return (
    <div className="">
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
    </div>
  );
}

export default App;
