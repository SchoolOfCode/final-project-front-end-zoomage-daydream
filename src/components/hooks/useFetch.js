import { useEffect, useState } from "react";

const useFetch = (URL) => {
  const [payload, setPayload] = useState([]);

  const fetchData = () => {
    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setPayload(json.payload);
      });
  };
  
  useEffect(() => {
    fetchData();
  }, [URL]);

  return [payload];
};
export default useFetch;

// This is a custom hook
