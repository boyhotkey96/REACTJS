import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import AddEditPhoto from "./AddEditPhoto";
import AddPage from "./pages/AddPage";

const DivBanner = styled.div`
  width: 100%;
  height: 280px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

function MainPhotoLayout() {
  const imageList = [
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1605116188625-8522bf02d10f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1667297413851-0fd505a35337?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  ];

  const indexRandom = Math.trunc(Math.random() * imageList.length);
  const imageRandom = imageList[indexRandom];

  return (
    <>
      <h1>App Photos - Using Redux Toolkit 🎭</h1>
      <DivBanner className="banner">
        <img src={imageRandom} alt="banner" />
      </DivBanner>
      {/* <Outlet /> */}
      <Routes>
        <Route index element={<AddPage />} />
        <Route path="/add" element={<AddEditPhoto />} />
        <Route path="/:photoId" element={<AddEditPhoto />} />
      </Routes>
    </>
  );
}

export default MainPhotoLayout;
