import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addPhoto, updatePhoto } from "../PhotoSlice";
import PhotoForm from "./PhotoForm";

function AddEditPhoto() {
  const { photoId } = useParams();
  const isAddMode = !photoId;
  // console.log(photoId)

  const dispatch = useDispatch();

  const editPhoto = useSelector((state) =>
    state.photos.find((photo) => photo.id === +photoId)
  );
  const navigate = useNavigate();

  const initialValues = isAddMode
    ? {
      id: +`${Math.trunc(Math.random() * 11)}${Math.random()}`,
      title: "",
      category: undefined,
      photo: "",
    }
    : editPhoto;

  const handleSubmit = async (values) => {
    return new Promise((resolve) => {
      console.log("submit form: ", values);

      setTimeout(() => {
        if (isAddMode) {
          dispatch(addPhoto(values));
        } else {
          dispatch(updatePhoto(values));
        }
        navigate("/photos");
        resolve(true);
      }, 1500);
    });
  };

  return (
    <PhotoForm
      initialValues={initialValues}
      isAddMode={isAddMode}
      onSubmit={handleSubmit}
    />
  );
}

export default AddEditPhoto;
