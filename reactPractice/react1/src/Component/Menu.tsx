import { MouseEvent, useState } from "react";

interface MenuProps {
  menuItems: string[];
}

function Menu({ menuItems }: MenuProps) {
  // let menuItems = ["Home", "About us", "Our work", "Gallery", "Contact us"];
  // menuItems = [];
  // const handleClick = (event: MouseEvent) => {
  //   console.log(event);
  //   console.log(activeBlock);
  // };
  const [activeBlock, setActiveBlock] = useState(-1);
  const changeActiveBlock = (index: number) => {
    setActiveBlock(index);
    // console.log(activeBlock + " " + index);
  };
  return (
    <>
      <ul className="list-group">
        {menuItems.length === 0 && <p>No Menu Items</p>}
        {menuItems.map((menu, index) => (
          <li
            className={
              activeBlock === index
                ? "list-group-item  active"
                : "list-group-item"
            }
            key={index}
            onClick={() => changeActiveBlock(index)}
          >
            {menu}
          </li>
        ))}
      </ul>
    </>
  );
}

// onClick={() => console.log(menu + " - " + index)
// <li className="list-group-item" key={index} onClick={handleClick}>
export default Menu;
