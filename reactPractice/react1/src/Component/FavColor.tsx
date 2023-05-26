import { useState } from "react";
function FavColor() {
  const [color, setColor] = useState("Red");
  return (
    <div>
      My Fav Color is {color}
      <br />
      <button onClick={() => setColor("Green")}>Change Color</button>
    </div>
  );
}
export default FavColor;
