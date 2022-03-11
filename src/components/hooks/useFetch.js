import { useEffect, useState } from "react";


// a useFetch hook was created to prevent writing multipe fetch requests and also make the code cleaner.

const useFetch = (URL) => {
  const [payload, setPayload] = useState([]);

  // a fetch request was made to the database.
  const fetchData = () => {
    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setPayload(json.payload);
      });
  };
  
// a useEffect was use so the code only runs on first mount and when URL changes.
  useEffect(() => {
    fetchData();
  }, [URL]);

  // when useFetch is called it returns payload.
  return [payload];
};
export default useFetch;


