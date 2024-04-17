import { useState } from "react";
import Background from "./components/Background/Background";
import Navbar from "./components/Navbar/Navbar";

function App() {
  let heroData = [
    { text1: 'Dive into', text2: "what you love", },
    { text1: 'Indulge', text2: "your passions", },
    { text1: 'Give in to', text2: "your passions", }
  ]

  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);

  return (
    <div>
      <Background heroCount={heroCount} playStatus={playStatus} />
      <Navbar />
      <Hero
        heroData={heroData}
        playStatus={playStatus}
        setPlayStatus={setPlayStatus}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
      />
    </div>
  );
}

export default App;