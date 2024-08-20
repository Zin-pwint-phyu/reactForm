import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
interface LikeProps {
  onClick: () => void;
}
const Like = ({ onClick }: LikeProps) => {
  const [status, setStatus] = useState(false);
  const toggle = () => {
    setStatus(!status);
    onClick();
  };
  return (
    <>
      <div style={{ margin: 20 }}>
        {status ? (
          <FaRegHeart onClick={toggle} size={40} color="red" />
        ) : (
          <FaHeart onClick={toggle} size={40} color="red" />
        )}
      </div>
    </>
  );
};

export default Like;
