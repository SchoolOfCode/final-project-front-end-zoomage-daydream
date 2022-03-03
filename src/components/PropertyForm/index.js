import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import ImageUploader from "../../components/ImageUploader";

const PropertyForm = () => {
  const { register, handleSubmit } = useForm();
  const [uploadedImages, setUploadedImages] = useState("");

  const propertyInfo = (images) => {
    setUploadedImages(images);
  };

  const handleRegistration = (data) => {
    const propertyDetailsData = Object.assign(data, { images: uploadedImages });
    console.log("dd", propertyDetailsData);
  };

  return (
    <form onSubmit={handleSubmit(handleRegistration)}>
      <div className="Address">
        <div>
          <TextField
            required
            id="standard-required"
            label="Address Line 1 "
            placeholder="Required"
            variant="standard"
            name="addressone"
            {...register("addressone")}
          />
        </div>
        <div>
          <TextField
            required
            id="standard-required"
            label="Address Line 2"
            placeholder="Required"
            variant="standard"
            name="addresstwo"
            {...register("addresstwo")}
          />
        </div>
        <div>
          <TextField
            required
            id="standard-required"
            label="City"
            placeholder="Required"
            variant="standard"
            name="city"
            {...register("city")}
          />
        </div>
        <div>
          <TextField
            required
            id="standard-required"
            label="Region"
            placeholder="Required"
            variant="standard"
            name="region"
            {...register("region")}
          />
        </div>
        <div>
          <TextField
            required
            id="standard-required"
            label="Postal Code"
            placeholder="Required"
            variant="standard"
            name="postcode"
            {...register("postcode")}
          />

          <div className="SpacesDropDownContainer">
            <div>
              <label> Type of Space:</label>
              <br />

              <select
                name="type_of_space"
                id="spaces"
                placeholder="Pick a Space"
                {...register("type_of_space")}
                required
              >
                <option value="">Select your option</option>
                <option value="flat">House</option>
                <option value="house">Apartment/Flat</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label> Purpose of space:</label>
              <br />

              <select
                name="category_of_space"
                id="spaces"
                required
                {...register("category_of_space")}
              >
                <option value="">Select your option</option>
                <option value="remote working">Remote Working</option>
                <option value="music space">Music Space</option>
                <option value="gym space">Gym Space</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label> Types of Spaces:</label>
              <br />

              <select
                name="fraction_of_space"
                id="spaces"
                {...register("fraction_of_space")}
                required
              >
                <option value="">Select your option</option>
                <option value="whole property">Whole Property</option>
                <option value="private room">Private Room</option>
                <option value="duplex condo">Duplex Condo</option>
                <option value="conference room">Conference Room</option>
              </select>
            </div>
          </div>
          <div className="amenitiesContainer">
            <div>Amenities</div>
            <label>
              <input
                type="checkbox"
                name="wificheck"
                {...register("wificheck")}
              />
              WiFi
            </label>
            <label>
              <input
                type="checkbox"
                name="showercheck"
                {...register("showercheck")}
              />
              Shower
            </label>
            <label>
              <input
                type="checkbox"
                name="microwavecheck"
                {...register("microwavecheck")}
              />
              Microwave
            </label>
            <label>
              <input
                type="checkbox"
                name="standingddeskcheck"
                {...register("standingdeskcheck")}
              />
              Standing Desk
            </label>
            <label>
              <input
                type="checkbox"
                name="fridgecheck"
                {...register("fridgecheck")}
              />
              Fridge
            </label>
            <div className="additionalInfoContainer">
              <div>
                <h2>Additional Information</h2>
              </div>
              <textarea
                rows="8"
                cols="50"
                name="additionalinfo"
                {...register("additionalinfo")}
              ></textarea>
              <div className="ImageUpload">
                {/* <input
                  id="files"
                  input
                  type="file"
                  name="images"
                  multiple
                  {...register("images")}
                ></input> */}
                <ImageUploader picture={propertyInfo} />
              </div>
            </div>
          </div>

          <button>Submit</button>
        </div>
        <div></div>
      </div>
    </form>
  );
};

export default PropertyForm;
