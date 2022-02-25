import React, { useState, useEffect } from "react";
import EmptyCard from "../EmptyCard";
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
  useEffect(() => {
    const fetchData = async () => {
      const url = "https://space-project-backend.herokuapp.com/spaces";
      const res = await fetch(url);
      const data = await res.json();
      //data.?
      setSpaces(data.payload);
      console.log(data.payload);
      //   console.log(data.payload[0].address);
      //   console.log(data.payload[0].date);
      //   console.log(data.payload[0].endtime);
      //   console.log(data.payload[0].images);
      //   console.log(data.payload[0].starttime);
    };
    fetchData();
  }, []);
  console.log(spaces);
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
