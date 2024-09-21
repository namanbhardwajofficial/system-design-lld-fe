import "./App.css";
import { useEffect, useState } from "react";
import { Meme } from "./Meme";
import { ShimmerUI } from "./ShimmerUI";

function App() {
  const [apiRes, SetAPIRes] = useState([]);
  const [dataPresent, SetDataPresent] = useState(false);

  const fetchMemes = async () => {
    try {
      SetDataPresent(false);
      const response = await fetch("https://meme-api.com/gimme/16");
      const paresedRes = await response.json();
      SetAPIRes(paresedRes.memes);
      SetDataPresent(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMemes();
  }, []);

  return (
    <div className="home-page">
      {!dataPresent ? (
        <ShimmerUI />
      ) : (
        apiRes.map((data, index) => <Meme memeData={data} key={index} />)
      )}
    </div>
  );
}

export default App;
