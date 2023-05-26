import { MouseEvent } from "react";
function Menu() {
  let menuItems = ["Home", "About us", "Our work", "Gallery", "Contact us"];
  // menuItems = [];
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <ul className="list-group">
        {menuItems.length === 0 && <p>No Menu Items</p>}
        {menuItems.map((menu, index) => (
          <li className="list-group-item" key={index} onClick={handleClick}>
            {menu}
          </li>
        ))}
      </ul>
    </>
  );
}

// onClick={() => console.log(menu + " - " + index)

export default Menu;
