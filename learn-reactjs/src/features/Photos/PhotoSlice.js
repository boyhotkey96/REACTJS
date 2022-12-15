import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "photo 1",
    category: 12123,
    photo:
      "https://images.unsplash.com/photo-1670968981804-525574bfb788?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=868&q=80",
  },
  {
    id: 2,
    title: "photo 2",
    category: 3234,
    photo:
      "https://plus.unsplash.com/premium_photo-1663054710563-598f084bdd42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1763&q=80",
  },
  {
    id: 3,
    title: "photo 3",
    category: 345,
    photo:
      "https://images.unsplash.com/photo-1664575599736-c5197c684128?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  },
  {
    id: 4,
    title: "photo 3",
    category: 56456,
    photo:
      "https://images.unsplash.com/photo-1670974893112-f0b884b328d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
];

export const photoSlice = createSlice({
  name: "photo",
  initialState: initialState,
  reducers: {
    addPhoto: (state, action) => {
      state.push(action.payload);
    },
    removePhoto: (state, action) => {
      // return state.filter((item) => item.id !== action.payload);

      const removePhotoId = action.payload;
      const photoIndex = state.findIndex((item) => item.id === +removePhotoId);
      const newState = [...state];
      newState.splice(photoIndex, 1);
      return newState;
    },
    updatePhoto: (state, action) => {
      const newPhoto = action.payload;
      const newState = [...state];
      const photoIndex = state.findIndex((item) => item.id === +newPhoto.id);
      // newState.splice(photoIndex, 1, action.payload)
      if (photoIndex > 0) {
        newState[photoIndex] = newPhoto;
      }

      return newState;
    },
  },
});

const { reducer, actions } = photoSlice;
export const { addPhoto, removePhoto } = actions;

export default reducer;
