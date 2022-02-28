import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import API_URL from "../../config";
import Card from "../../components/Card";

const Reserve = () => {
  const location = useLocation();
  const id = location.state;
  const [space, setSpace] = useState([]);
  const [images, setImages] = useState([]);

  const fetchData = async () => {
    const result = await fetch(`${API_URL}/spaces/${id}`);
    const data = await result.json();

    setImages(data.payload[0].images);
    setSpace(data.payload[0]);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Header />
      <div>
        {" "}
        <p>{space.purpose_of_space}</p>
        <p>{space.address}</p>
        <p>4.5</p>
        <p>Reviews(48)</p>
      </div>

      <div>
        {space.images &&
          space.images.map((item, index) => {
            return (
              <div key={index}>
                <img src={item} alt="" />
              </div>
            );
          })}
        <h2>Property Details</h2>
        <h3>{space.type_of_space}</h3>
        <h3>{space.fraction_of_space}</h3>
        <p>Check in: </p>
        <p>Cancellation</p>
        <p>Instructions on how to use go here</p>
        <h3>Amenities</h3>
        <div>
          {space.amenities &&
            space.amenities.map((item, index) => {
              return <p key={index}>{item}</p>;
            })}
        </div>
        <p>Our host says "{space.additional_information}"</p>
      </div>
      <Footer />
    </div>
  );
};

export default Reserve;
