import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import ImageUploader from "../../components/ImageUploader";
import API_URL from "../../config";
import css from "./PropertyForm.module.css";
import axios from "axios"

const PropertyForm = () => {
  const { register, handleSubmit } = useForm();
  const [uploadedImages, setUploadedImages] = useState("");

  const propertyInfo = (images) => {
    setUploadedImages(images);
  };

  const handleRegistration = async (data) => {
    const propertyDetailsData = Object.assign(data, {
      images: uploadedImages
    });
    const {
      additionalinfo,
      addressone,
      addresstwo,
      category_of_space,
      city,
      fraction_of_space,
      fridgecheck,
      images,
      microwavecheck,
      postcode,
      region,
      showercheck,
      standingdeskcheck,
      type_of_space,
      wificheck
    } = propertyDetailsData;
    console.log("hi", propertyDetailsData);

    const address = `${addressone}, ${addresstwo}, ${city}, ${region}, ${postcode}`;
    const amenities = [
      fridgecheck ? "fridge" : "",
      microwavecheck ? "microwave" : "",
      showercheck ? "shower" : "",
      standingdeskcheck ? "standingdesk" : "",
      wificheck ? "wifi" : ""
    ];
    const submit = axios.post(`${API_URL}/spaces`, {
      additional_information: additionalinfo,
      address: address,
      purpose_of_space: category_of_space,
      fraction_of_space: fraction_of_space,
      images: images,
      type_of_space: type_of_space,
      amenities: amenities
      
    });
   
    const pData = await submit.json();

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

          <div className={css.SpacesDropDownContainer}>
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
          <div className={css.amenitiesContainer}>
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
            <div className={css.additionalInfoContainer}>
              <div>
                <h2>Additional Information</h2>
              </div>
              <textarea
                rows="8"
                cols="50"
                name="additionalinfo"
                {...register("additionalinfo")}
              ></textarea>
              <div className={css.ImageUpload}>
                
                <ImageUploader picture={propertyInfo} />
              </div>
            </div>
          </div>

          <button className={css.submitButton}>Submit</button>
        </div>
        <div></div>
      </div>
    </form>
  );
};

export default PropertyForm;
