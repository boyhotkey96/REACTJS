import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { removePhoto } from "../PhotoSlice";
import Render from "./RenderPage";

function HomePage() {
  const photos = useSelector((state) => state.photos);
  const dispatch = useDispatch();
  const [color, setColor] = useState();
  const navigate = useNavigate();

  const location = useLocation()
  // console.log(location) // => /photos

  const handleMouseEnter = () => {
    setColor(true);
  };

  const handleMouseLeave = () => {
    setColor(false);
  };

  const handleRemove = (id) => {
    dispatch(removePhoto(id));
  };

  const handleEdit = (photo) => {
    // dispatch(editPhoto(item))
    navigate(`${location.pathname}/edit/${photo.id}`, {
      state: [
        { name: "boyhotkey96", age: "1996" },
        { name2: "boyhotkey96 2", age: "1995" },
      ],
    });
  };

  return (
    <section>
      <Link
        to="/photos/add"
        style={{
          color: color ? "green" : "blue",
          fontWeight: "bold",
          display: "block",
          fontSize: "22px",
          textAlign: "center",
          padding: "30px 0",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Add Photo
      </Link>
      <Render
        photos={photos}
        onEditClick={handleEdit}
        onRemoveClick={handleRemove}
      />
    </section>
  );
}

export default HomePage;
