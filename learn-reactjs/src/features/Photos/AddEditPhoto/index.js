import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { addPhoto, updatePhoto } from "../PhotoSlice";
import PhotoForm from "./PhotoForm";

function AddEditPhoto() {
  const navigate = useNavigate();
  const { photoId } = useParams();
  const isAddMode = !photoId;

  const dispatch = useDispatch();

  const editPhoto = useSelector((state) =>
    state.photos.find((photo) => photo.id === +photoId)
  );

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

  const params = useParams();
  console.log(params);
  const location = useLocation();
  console.log(location);

  return (
    <PhotoForm
      initialValues={initialValues}
      isAddMode={isAddMode}
      onSubmit={handleSubmit}
    />
  );
}

export default AddEditPhoto;
