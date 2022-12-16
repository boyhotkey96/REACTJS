import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removePhoto } from "../PhotoSlice";
import Render from "./RenderPage";

function Add() {
  const photos = useSelector((state) => state.photos);
  const dispatch = useDispatch();
  const [color, setColor] = useState();
  const navigate = useNavigate()

  const handleMouseEnter = () => {
    setColor(true);
  };

  const handleMouseLeave = () => {
    setColor(false);
  };

  const handleRemove = (id) => {
    dispatch(removePhoto(id))
  }

  const handleEdit = (photo) => {
    // dispatch(editPhoto(item))
    navigate(`/photos/${photo.id}`, { state: photo });
  }

  return (
    <section>
      <Link
        to="/photos/add"
        style={{
          color: color ? "green" : "blue",
          fontWeight: 'bold',
          display: 'block',
          fontSize: '22px',
          textAlign: 'center',
          padding: "30px 0",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Add Photo
      </Link>
      <Render photos={photos} onEditClick={handleEdit} onRemoveClick={handleRemove} />
    </section>
  );
}

export default Add;
