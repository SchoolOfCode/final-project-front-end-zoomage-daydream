import React, { useState, useEffect } from "react";
import EmptyCard from "../EmptyCard";
import API_URL from "../../config";

function PreviousBookings() {
  const [spaces, setSpaces] = useState([
    {
      address: "11 Nowhere Road, Birmingham, UK",
      images: [
        "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      ],
      endtime: "19:00",
      starttime: "07:00",
      date: ["2022-03-07T00:00:00.000Z", "2022-03-19T00:00:00.000Z"]
    }
  ]);
  const fetchData = async () => {
    const res = await fetch(`${API_URL}/spaces`);
    const data = await res.json();
    setSpaces(data.payload);
    console.log(data.payload);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {spaces.map((space, index) => {
        return (
          <EmptyCard
            image={space.images[0]}
            endtime={space.endtime}
            address={space.address}
            starttime={space.starttime}
            key={index}
          />
        );
      })}
    </div>
  );
}
export default PreviousBookings;
