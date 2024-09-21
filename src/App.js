import "./App.css";
import { useEffect, useState } from "react";
import { Meme } from "./Meme";
import { ShimmerUI } from "./ShimmerUI";

function App() {
  const [apiRes, SetAPIRes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMemes();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.offsetHeight
    ) {
      fetchMemes();
    }
  };

  const fetchMemes = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://meme-api.com/gimme/16");
      const parsedRes = await response.json();
      SetAPIRes((prevRes) => [...prevRes, ...parsedRes.memes]);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="home-page">
      {loading ? (
        <ShimmerUI />
      ) : (
        apiRes.map((data, index) => <Meme memeData={data} key={index} />)
      )}
    </div>
  );
}

export default App;
