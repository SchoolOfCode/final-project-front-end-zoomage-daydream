import React from "react";
import { useState } from "react";

const ImageUploader = () => {
  const [images, setImages] = useState([]);

  const handleClick = (e) => {
    setImages([...images, e.target.files]);
  };
  if (images[0] !== undefined) {
    console.log(images[0][0].name);
  }

  return (
    <div>
      <input type="file" onChange={handleClick} />

      {images[0] !== undefined ? (
        images.map((item) => <p>{item[0].name}</p>)
      ) : (
        <></>
      )}
    </div>
  );
};

export default ImageUploader;
