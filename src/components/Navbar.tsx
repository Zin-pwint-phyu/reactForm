import React from "react";
interface Props {
  cardItemCount: number;
}
const Navbar = ({ cardItemCount }: Props) => {
  return (
    <div>
      <h1>Navabr</h1>
      {cardItemCount}
    </div>
  );
};

export default Navbar;
