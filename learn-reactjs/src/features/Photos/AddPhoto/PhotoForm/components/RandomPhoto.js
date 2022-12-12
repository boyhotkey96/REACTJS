const getRandomImage = () => {
  const idRandom = Math.floor(Math.random() * 2000);
  return `https://picsum.photos/200/300?random=${idRandom}`;
};

function RandomPhoto(props) {
  const { name, imageUrl, onImageUrlChange, onRandomButtonBlur } = props;

  const handleRandomPhotoClick = async (e) => {
    e.preventDefault()
    if (onImageUrlChange) {
      const randomImageUrl = getRandomImage();
      onImageUrlChange(randomImageUrl);
    }
  };

  return (
    <>
      <button name={name} onBlur={onRandomButtonBlur} onClick={handleRandomPhotoClick}>
        Random a photo
      </button>
      <div className="photo__image">
        {imageUrl && <img src={imageUrl} alt="photos" />}
      </div>
    </>
  );
}

export default RandomPhoto;
