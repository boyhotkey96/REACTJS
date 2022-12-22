import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useEffect, useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import styled from "styled-components";
import productApi from "~/api/productApi";
import AddEditPhoto from "./AddEditPhoto";
import Signin from "./Auth/pages/Signin";
import HomePage from "./pages/HomePage";


const Wrap = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  .photo__signin {
    margin-left: auto;
    padding: 8px 16px;
    // border: 1px solid #3e3e3e;
    border-radius: 6px;
    color: #fff;
    background-color: #1976d2;
    opacity: 0.9;
    cursor: pointer;
    transition: all .25s ease-out;
    :hover {
      opacity: 1;
      background-color: #2076d9;
    }
  }
`

const DivBanner = styled.div`
  width: 100%;
  height: 280px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// Configure Firebase.
const config = {
  apiKey: "AIzaSyCoVibwP8RPtH_Ngn5EYhZH5RsnkGzablo",
  authDomain: "photo-app-ca395.firebaseapp.com",
  // projectId: "photo-app-ca395",
  // storageBucket: "photo-app-ca395.appspot.com",
  // messagingSenderId: "600389352653",
  // appId: "1:600389352653:web:7d82be117c0d5b73103d84",
  // measurementId: "G-Z0J8ZK1NZV"
};
firebase.initializeApp(config);

function MainPhotoLayout() {
  const imageList = [
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1605116188625-8522bf02d10f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1667297413851-0fd505a35337?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  ];

  const indexRandom = Math.trunc(Math.random() * imageList.length);
  const imageRandom = imageList[indexRandom];
 
  useEffect(() => {
    const fetProductList = async () => {
      try {
        const params = {
          _page: 1,
          _limit: 10,
        }
        const response = await productApi.getAll(params);
        console.log(response);
        // fetch('https://js-post-api.herokuapp.com/api/products')
        //   .then((response) => response.json())
        //   .then((data) => console.log(data));
      } catch (error) {
        console.log("Failed to  fetch product list: ", error);
      }
    };

    fetProductList();
  }, []);

  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
      if (!user) {
        console.log("Chua login")
      } else {
        const {displayName, email, photoURL, providerId} = user
        console.log({displayName, email, photoURL, providerId});
        const token = await user.getIdToken();
        console.log(token)
        setIsSignedIn(!!user);
      }
    });

    return () => unregisterAuthObserver();
  }, []);

  const navigate = useNavigate()
  const handleLogout = () => {
    firebase.auth().signOut();
    setIsSignedIn(false);
    navigate("/photos/sign-in")
  }

  const handleFetchApi = () => {
    const params = {
      _page: 1,
      _limit: 10,
    }
    const response =  productApi.getAll(params);
    console.log(response);
  }

  // const match = useMatches()
  // console.log(match)

  return (
    <>
      <Wrap>
        <h1>App Photos - Using Redux Toolkit 🎭</h1>
        {!isSignedIn ?
          <Link className="photo__signin" to="/photos/sign-in">Sign in</Link>
          : <div>
            <p>{firebase.auth().currentUser.displayName}</p>
            <button onClick={() => handleLogout()}>Sign-out</button>
          </div>
        }
      </Wrap>
      <DivBanner className="banner">
        <img src={imageRandom} alt="banner" />
      </DivBanner>
      <button onClick={handleFetchApi}>fetchAll api</button>
      {/* <Outlet /> */}
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/add" element={<AddEditPhoto />} />
        <Route path="/edit/:photoId" element={<AddEditPhoto />} />
        <Route path="*" element={<p>404</p>} />
      </Routes>
    </>
  );
}

export default MainPhotoLayout;
