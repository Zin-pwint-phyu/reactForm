import React from "react";
interface CardItemProps {
  cardItems: string[];
  onClear: () => void;
}
const Card = ({ cardItems, onClear }: CardItemProps) => {
  return (
    <>
      <h1>Card</h1>
      <ul>
        {cardItems.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <button onClick={onClear} className="btn btn-success">
        CLear
      </button>
    </>
  );
};

export default Card;
