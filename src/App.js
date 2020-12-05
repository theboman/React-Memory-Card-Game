import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [cards, setCards] = useState([1, 2, 4, 5, 2, 4, 1, 5]);
  const [position, setPosition] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const [holderValue, setHolderValue] = useState(null); // temp value
  const [holderIndex, setHolderIndex] = useState(null); // temp index

  function cardClick(index) {
    console.log(
      `this is index: ${index}, this is the value of the card: ${cards[index]}, this is if its up or down ${position[index]}`
    );
    // add variable for number of guesses?
    // check if any zeros in postion? check for win
    console.log("this is holder value" + holderValue);

    if (!holderValue) {
      // check if a pre existing card has been picked if so..
      setHolderValue(cards[index]);
      setHolderIndex(index);
      // gives the value and index of selected 1st card.
      const tempPosition = [...position]; //spread this poisitong becuse now its set to 1 visable.
      tempPosition[index] = 1;
      console.log(tempPosition);
      setPosition(tempPosition);
    } else if (holderValue === cards[index]) {
      // got a card already now checkin if match
      console.log("hello match!");
      const tempPosition = [...position]; //spread this poisitong becuse now its set to a matching pair.
      tempPosition[index] = 1;
      setPosition(tempPosition);
      setHolderValue(null);
      setHolderIndex(null);
    } else if (holderValue !== cards[index]) {
      // no match TODO show card for a bit!
      console.log("no match jack!");
      console.log(`this is the final else: ${holderValue}`);
      setTimeout(() => {
        const tempPosition = [...position]; //spread this poisitong becuse now its set to a matching pair.
        tempPosition[index] = 0;
        tempPosition[holderIndex] = 0;
        setPosition(tempPosition);
      }, 700);
      const tempPosition = [...position]; //spread this poisitong becuse now its set to a matching pair.
      tempPosition[index] = 1;
      setPosition(tempPosition);
      setHolderValue(null);
      setHolderIndex(null);
      // const tempPosition = [...position];
      // tempPosition[index] = 1;
      // setPosition(tempPosition);
      // setHolder(null);
    }
  }

  console.log("this is temp index:" + holderIndex);
  console.log("this is temp value:" + holderValue);

  return (
    <div className="App">
      <div> 1, 2, 4, 5, 2, 4, 1, 5 </div>
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
