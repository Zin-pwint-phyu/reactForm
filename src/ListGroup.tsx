import { useState } from "react";
interface Props {
  items: string[];
  heading: string;
  onSelectedItem: (item: string) => void;
}
const ListGroup = ({ items, heading, onSelectedItem }: Props) => {
  const [selectedItem, setSelectedItem] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.length === 0 && <p>No items list</p>}
        {items.map((item, index) => (
          <li
            className={
              selectedItem === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedItem(index);
              onSelectedItem(item);
            }}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
