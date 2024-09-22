import "./App.css";
import { useEffect } from "react";

function App() {
  const handleClick = (e) => {
    console.log(e);
  };

  useEffect(() => {
    handleClick();
  }, []);

  const setLanguage = () => {
    
  };

  return (
    <div className="home-page">
      <nav className="nav-bar">
        <ul>About Us</ul>
        <ul>Home</ul>
        <ul>Contact Us</ul>
        <ul>Product</ul>
        <select
          className="dropdown"
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="mal">Malyalam</option>
          <option value="tam">Tamil</option>
        </select>
      </nav>
      <div className="body">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
