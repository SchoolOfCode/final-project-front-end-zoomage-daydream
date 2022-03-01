import React, { useState, useEffect } from "react";
import EmptyCard from "../EmptyCard";
import API_URL from "../../config";
import useFetch from "../hooks/useFetch";

function PreviousBookings() {
  const [spaces] = useFetch(`${API_URL}/spaces`);
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
