import React, { useState } from "react";
import { useForm } from "react-hook-form";

import ImageUploader from "../../components/ImageUploader";
import API_URL from "../../config";
import "./PropertyForm.css";
import axios from "axios";
import DatePicker from "react-multi-date-picker";
import TimeRange from "react-time-range";
import moment from "moment";

const PropertyForm = () => {
  const [dates, setDates] = useState([{ payload: "" }]);
  const [startTime, setStartTime] = useState(moment()); // Time Range
  const [endTime, setEndTime] = useState(moment()); // Time Range
  const { register, handleSubmit } = useForm();
  const [uploadedImages, setUploadedImages] = useState("");

  const propertyInfo = (images) => {
    setUploadedImages(images);
  };

  const datesSelected = dates.map((value) => {
    return `${value.day}-${value.month}-${value.year}`;
  });
  console.log(datesSelected);

  // sets the start time
  const handleStartTime = (e) => {
    setStartTime(e.startTime);
  };
  // sets the end time
  const handleEndTime = (e) => {
    setEndTime(e.endTime);
  };
  // gets the actual time from the startTime and EndTime date format
  let start = String(startTime).slice(11, 16);
  let end = String(endTime).slice(11, 16);

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
    <>
      <div className="title">
        Please complete the following details about the space you intend to host
      </div>
      <form
        onSubmit={handleSubmit(handleRegistration)}
        className="formContainer"
      >
        <div className="topContainer">
          <div className="addressContainer">
            <h2 className="addressHeader">Address Details</h2>
            <input
              required
              placeholder="Address Line 1"
              name="addressone"
              {...register("addressone")}
            />

            <input
              required
              placeholder="Address Line 2"
              name="addresstwo"
              {...register("addresstwo")}
            />

            <input
              required
              placeholder="City"
              name="City"
              {...register("city")}
            />

            <input
              required
              placeholder="Region"
              name="region"
              {...register("region")}
            />

            <input
              required
              placeholder="Post code"
              name="Post code"
              {...register("postcode")}
            />
          </div>
          <div className="spacesDropDownContainer">
            <h2>Property Details</h2>
            <div className="typeSpace">
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
            <div className="typeSpace">
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
            <div cclassName="typeSpace">
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
            <div className="amenitiesTitle">Amenities</div>
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
        </div>
        <div className="bottomContainer">
          <div className="dateTimePrice">
            <div className="datePrice">
              <p className="propertyFormTitles">
                {" "}
                Please choose the dates the space is available
              </p>
              <DatePicker
                value={dates}
                onChange={setDates}
                placeholder="Choose dates"
                format="DD/MM/YYYY"
                required
              />
            </div>

            <div className="datePrice">
              <p className="propertyFormTitles">
                {" "}
                Please choose the time the space is available
              </p>
              <TimeRange
                startMoment={startTime}
                endMoment={endTime}
                onStartTimeChange={handleStartTime}
                onEndTimeChange={handleEndTime}
                required
              />
            </div>

            <div className="datePrice">
              <p className="propertyFormTitles">
                {" "}
                Please enter the price per hour for the space
              </p>
              <div className="priceContainer">
                <label className="pounds">£</label>
                <input
                  className="priceInputBox"
                  required
                  id="standard-required"
                  placeholder="Price"
                  name="price"
                  type="number"
                  {...register("price")}
                />
              </div>
            </div>
          </div>

          <div className="additionalInfoContainer">
            <p className="addinfop"> Additional Information</p>

            <textarea
              className="textArea"
              rows="8"
              cols="50"
              name="additionalinfo"
              placeholder=" Describe your property and other amenities available."
              {...register("additionalinfo")}
            ></textarea>
          </div>
          <div className="leftBottom">
            <div className="imageUpload">
              <p className="addinfop">Please upload images of the space here</p>
              <ImageUploader picture={propertyInfo} />
            </div>
            <div className="button">
              <button className="submitButton">Submit</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default PropertyForm;
