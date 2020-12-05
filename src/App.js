import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [cards, setCards] = useState([1, 2, 4, 5, 2, 4, 1, 5]);
  const [position, setPosition] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const [holder, setHolder] = useState(null);

  function cardClick(index) {
    console.log(
      `this is index: ${index}, this is the value of the card: ${cards[index]}, this is if its up or down ${position[index]}`
    );

    if (!holder) {
      const tempNumber = [cards[index], index]; // gives the value
      console.log(tempNumber);
      setHolder(tempNumber); // sets holder ot this temp value
      const tempPosition = [...position];
      tempPosition[index] = 1;
      setPosition(tempPosition);
    } else if (holder[0] === cards[index]) {
      console.log("hello match!");
      const tempPosition = [...position];
      tempPosition[index] = 1;
      setPosition(tempPosition);
      setHolder(null);
    } else {
      console.log("no match jack!");
      console.log(`this is : ${holder}`);
      // const tempPosition = [...position];
      // tempPosition[index] = 1;
      // setPosition(tempPosition);
      // setHolder(null);
    }
  }
  console.log(`this is holder:${holder}`);
  return (
    <div className="App">
      {cards &&
        cards.map((v, i) => {
          return (
            <button
              onClick={() => cardClick(i)}
              className="card"
              key={i}
              disabled={position[i]}
            >
              {position[i] ? v : ""}
            </button>
          );
        })}
    </div>
  );
}
