import RandomPhoto from "./RandomPhoto";

function RandomPhotoField({ field, form, ...props }) {
  const { onBlur, value, name } = field;
  const { label } = props;

  const handleImageUrlChange = (newImageUrl) => {
    form.setFieldValue(name, newImageUrl);
  };

  return (
    <div className="form-group">
      {label && <label htmlFor={name}>{label}:</label>}
      <RandomPhoto
        name={name}
        imageUrl={value}
        onImageUrlChange={handleImageUrlChange}
        onRandomImageBlur={onBlur}
      />
    </div>
  );
}

export default RandomPhotoField;
