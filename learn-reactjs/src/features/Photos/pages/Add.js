import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removePhoto } from "../PhotoSlice";
import Render from "./Render";

function Add() {
  const photos = useSelector((state) => state.photos);
  const dispatch = useDispatch();
  const [color, setColor] = useState();

  const handleMouseEnter = () => {
    setColor(true);
  };

  const handleMouseLeave = () => {
    setColor(false);
  };

  const handleRemove = (id) => {
    // console.log(id)
    dispatch(removePhoto(id))
  }

  const handleEdit = (item) => {
    console.log(item)
    // dispatch(editPhoto(item))
  }

  return (
    <section>
      <Link
        to="/photos/add"
        style={{
          display: "flex",
          justifyContent: "center",
          textDecoration: "none",
          color: color ? "green" : "blue",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Add Photo
      </Link>
      <Render photos={photos} onEditClick={handleEdit} onAddClick={handleRemove} />
    </section>
  );
}

export default Add;
