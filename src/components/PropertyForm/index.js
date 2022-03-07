import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import ImageUploader from "../../components/ImageUploader";
import API_URL from "../../config";
import css from "./PropertyForm.module.css";
import DatePicker from "react-multi-date-picker";
import TimeRange from "react-time-range";
// import moment from "moment";

const PropertyForm = () => {
  // const [startTime, setStartTime] = useState(moment()); // Time Range
  // const [endTime, setEndTime] = useState(moment()); // Time Range
  const { register, handleSubmit } = useForm();
  const [uploadedImages, setUploadedImages] = useState("");

  const propertyInfo = (images) => {
    setUploadedImages(images);
  };

  const handleRegistration = async (data) => {
    const propertyDetailsData = Object.assign(data, {
      images: uploadedImages
    });
    console.log("heloo again", propertyDetailsData);
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
    const formSubmission = await fetch(`${API_URL}spaces`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        additional_information: additionalinfo,
        address: address,
        purpose_of_space: category_of_space,
        fraction_of_space: fraction_of_space,
        images: images,
        type_of_space: type_of_space,
        amenities: amenities
      })
    });
    const postData = await formSubmission.json();
  };

  return (
    <>
      <div className={css.title}>
        Please complete the following details about the space you intend to host
      </div>
      <form
        onSubmit={handleSubmit(handleRegistration)}
        className={css.formContainer}
      >
        <div className={css.addressContainer}>
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
          </div>
        </div>
        <div className={css.spacesDropDownContainer}>
          <div className={css.typeSpace}>
            <label> Type of Space:</label>
            <br />

            <select
              name="type_of_space"
              id="spaces"
              S
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
          <div className={css.categorySpace}>
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
          <div className={css.fractionSpace}>
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
          <div className={css.amenitiesTitle}>Amenities</div>
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
          <label>
            <input type="checkbox" name="other" {...register("other")} />
            Other
          </label>
        </div>
        <div className={css.dateTimePrice}>
          <div className={css.datePicker}>
            <DatePicker
              // value={dates}
              // onChange={setDates}
              placeholder="Choose dates"
              format="DD/MM/YYYY"
              required
            />
          </div>

          <div className={css.timeRange}>
            <TimeRange
              // startMoment={startTime}
              // endMoment={endTime}
              // onStartTimeChange={handleStartTime}
              // onEndTimeChange={handleEndTime}
              required
            />
          </div>

          <div>
            <TextField
              required
              id="standard-required"
              label="Price"
              placeholder="Required"
              variant="standard"
              name="price"
              {...register("price")}
            />
          </div>
        </div>
        <div className={css.additionalInfoContainer}>
          <div>
            <h2>Additional Information</h2>
          </div>
          <textarea
            rows="8"
            cols="50"
            name="additionalinfo"
            placeholder=" Describe your property and other amenities available."
            {...register("additionalinfo")}
          ></textarea>
        </div>
        <div className={css.imageUpload}>
          <ImageUploader picture={propertyInfo} />
        </div>
        <div className={css.submitButton}>
          <button>Submit</button>
        </div>
      </form>
    </>
  );
};

export default PropertyForm;
