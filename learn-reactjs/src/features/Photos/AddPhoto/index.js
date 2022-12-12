import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPhoto } from "../PhotoSlice";
import PhotoForm from "./PhotoForm";

function AddPhoto() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    return new Promise((resolve) => {
      console.log("submit form: ", values);

      setTimeout(() => {
        dispatch(addPhoto(values));
        navigate("/photos");
        resolve(true);
      }, 1500);
    });
  };

  return <PhotoForm onSubmit={handleSubmit} />;
}

export default AddPhoto;
