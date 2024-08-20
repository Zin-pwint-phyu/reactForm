import React, { useState } from "react";
const Button = () => {
  const [drink, setDrink] = useState({
    title: "Apple juice",
    price: 5,
  });
  const handleClick = () => {
    setDrink({ ...drink, price: 6 });
  };
  return (
    <>
      {drink.price}
      <div className="btn btn-primary" onClick={handleClick}>
        Button
      </div>
    </>
  );
};

export default Button;
