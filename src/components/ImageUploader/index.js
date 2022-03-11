import { useEffect, useState } from "react";

import css from "./ImageUploader.module.css";

// Image Uploader takes in picture function as a prop.
const ImageUploader = ({ picture }) => {
  //  a state is used to set the image chosen each time.
  const [images, setImages] = useState([]);

  // base64Converter converts the picture to base 64 then send it to the backend so it can be sent to cloudinary on the backend.
  const base64Converter = (e, file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const base64Image = reader.result;
      // all images chosen are then put into an array each time.
      setImages([
        // the previous state is combined with the new state.
        ...images,
        { name: e.target.files[0].name, base64: base64Image }
      ]);
    };
  };

  // the handleClick function runs when an image is chosen. An event listener was added to get the image chosen.
  const handleClick = (e) => {
    const file = e.target.files[0];
    base64Converter(e, file);
  };

  // a useEffect was added so the function only runs when a new image is chosen.
  useEffect(() => {
    picture(images);
  }, [images]);

  // the handle delete function is invoked when you click on delete button.
  const handleDelete = (e) => {
    const id = e.target.value;
    const array = [...images.slice(0, id), ...images.slice(id + 1)];
    setImages(array);
  };

  return (
    <div className={css.fileUploader}>
      <input type="file" onChange={handleClick} />

      {/* All images chosen is displaed with the delete button so you can delete each one. */}
      {images !== undefined &&
        images.map((item, index) => (
          <div className={css.images} key={index}>
            <p>{item.name}</p>

            <button className={css.buttom} value={index} onClick={handleDelete}>
              x
            </button>
          </div>
        ))}
    </div>
  );
};

export default ImageUploader;
