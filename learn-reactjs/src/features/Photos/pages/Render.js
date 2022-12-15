import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const WrapperPhotoList = styled.div`
  display: flex;
  // justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 20px;
  gap: 15px;
`;

const WrapperPhotoItem = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  :hover div {
    opacity: 1;
    visibility: visible;
    transition: all 0.25s ease-out 0.3s;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fix: cover;
    transition: transform 0.25s ease-out 0s;
    :hover {
      cursor: pointer;
      transform: scale(1.5);
    }
  }
`;

const WrapContent = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  text-align: center;
  background-color: rgba(85, 81, 81, 0.8);
  visibility: hidden;
  p {
    color: #fff;
  }
  div {
    display: flex;
    width: 90%;
    gap: 10px;
    button {
      flex: 1;
      padding: 10px 0;
      background-color: transparent;
      font-weight: bold;
      font-size: 18px;
      cursor: pointer;
      border-radius: 4px;
      transition: border, color 0.3s ease-out;
      :nth-child(1) {
        border: 1px solid #fff;
        color: #fff;
        :hover {
          color: deeppink;
          background-color: #fff;
        }
      }
      :nth-child(2) {
        border: 1px solid deeppink;
        color: deeppink;
        :hover {
          color: white;
          background-color: deeppink;
        }
      }
    }
  }
`;

function Render({ photos, onAddClick, onEditClick }) {
  const navigate = useNavigate();

  const handleRemoveClick = (id) => {
    if (onAddClick) {
      onAddClick(id);
    }
  };

  const handleEditAddClick = (item) => {
    if (onEditClick) {
      onEditClick(item);
      navigate("/photos/add", { state: item });
    }
  };

  return (
    <WrapperPhotoList>
      {photos.map((item, index) => (
        <WrapperPhotoItem key={index}>
          <img src={item.photo} alt={item.title || "no title"} />
          <WrapContent>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod,
              at! Provident
            </p>
            <div>
              <button onClick={() => handleEditAddClick(item)}>Edit</button>
              <button onClick={() => handleRemoveClick(item.id)}>Remove</button>
            </div>
          </WrapContent>
        </WrapperPhotoItem>
      ))}
    </WrapperPhotoList>
  );
}

export default Render;
