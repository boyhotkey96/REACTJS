import { useState, useEffect } from "react";

function Imagepreview2() {
  const [avatar, setAvatar] = useState();

  useEffect(() => {
    // Cleanup function: clean avatar to memory when onchange
    return () => {
      // avatar && URL.revokeObjectURL(avatar.preview);
      URL.revokeObjectURL(avatar?.preview);
    };
  });

  const handlePrevewAvatar = (e) => {
    const file = e.target.files[0];
    console.log(file);
    file.preview = URL.createObjectURL(file);
    setAvatar(file);
  };

  return (
    <div>
      <input type="file" onChange={handlePrevewAvatar} />
      <div>
        {avatar && <img src={avatar.preview} alt="images" width="500px" />}
      </div>
    </div>
  );
}

export default Imagepreview2;
