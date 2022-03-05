import React, { useEffect } from "react";
import { useState } from "react";
import css from "./ImageUploader.module.css";

const ImageUploader = ({ picture }) => {
  const [images, setImages] = useState([]);

  const previewFile = (e, file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const base64Image = reader.result;
      setImages([
        ...images,
        { name: e.target.files[0].name, base64: base64Image }
      ]);
    };
  };

  const handleClick = (e) => {
    const file = e.target.files[0];
    console.log(file)
    previewFile(e, file);
  };

  useEffect(() => {
    picture(images);
  }, [images]);

  const handleDelete = (e) => {
    const index = e.target.value;
    const array = [...images.slice(0, index), ...images.slice(index + 1)];
    setImages(array);
  };

  return (
    <div>
      <input type="file" onChange={handleClick} />

      {images !== undefined ? (
        images.map((item, index) => (
          <div className={css.images} key={index}>
            <p>{item.name}</p>

            <button value={index} onClick={handleDelete}>
              x
            </button>
          </div>
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default ImageUploader;
