const getRandomImage = () => {
  const idRandom = Math.floor(Math.random() * 2000);
  return `https://picsum.photos/200/300?random=${idRandom}`;
};

function RandomPhoto(props) {
  const { name, imageUrl, onImageUrlChange, onRandomImageBlur } = props;

  const handleClick = async () => {
    if (onImageUrlChange) {
      const randomImageUrl = getRandomImage();
      onImageUrlChange(randomImageUrl);
    }
  };

  return (
    <div className="form-group">
      <button name={name} onBlur={onRandomImageBlur} onClick={handleClick}>
        Random a photo
      </button>
      <div className="photo__image">
        {<img
          src={imageUrl || `https://picsum.photos/200/300?random=0`}
          alt="photos"
        />}
      </div>
    </div>
  );
}

export default RandomPhoto;
