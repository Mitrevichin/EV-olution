import { useState } from "react";
import Background from "./components/Background/Background";

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
    </div>
  );
}

export default App;