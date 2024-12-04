import React, { useState } from "react";
import "./App.css"; // Link to CSS page

function App() {
  // Array of quotes
  const quotes = [
    "The best way to predict the future is to create it.",
    "You are never too old to set another goal or to dream a new dream.",
    "Opportunities don't happen, you create them.",
    "It always seems impossible until it's done.",
    "Everything you can imagine is real.",
    "Success usually comes to those who are too busy to be looking for it."
  ];

  // Holds the current quote
  const [quote, setQuote] = useState("");

  // Generate a random quote
  const generateQuote = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Sabesen's Webpage</h1>
        <p>
          I created this website using the React web development framework for Lab 10 - Problem 3.
          I created this webpage by downloading Node.js on my computer.
          I then ran the command 'npx create-react-app Lab10Problem3' and npm start to create the React app.
          After building the app, I edited the App.js and App.css files to design the webpage.
          Some difficulties that I encountered were setting up react as I wasn;t familiar with it. 
          I didn't know what commands to run and how my file structure should have been. 
          I also had trouble creating the correct code to work with the react app, especially when it came to the state stuff. 
        </p>
        
        <div className="quote-section">
          <button onClick={generateQuote}>Get a Motivational Quote</button>
          {quote && <p>{quote}</p>}
        </div>
      </header>
    </div>
  );
}

export default App;

