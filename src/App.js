import { useState } from "react";
import Rate from "./Rate";
import "./styles.css";

export default function App() {
  const [rating, setRating] = useState(0);

  return (
    <div className="App">
      <Rate rating={rating} onRating={(rate) => setRating(rate)} />
      <h2>Rating -> {rating}</h2>
      <button onClick={() => setRating(0)}>Clear</button>
    </div>
  );
}
