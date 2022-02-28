import { useState } from "react";

const useFetch = (Api) => {
  const [url, setUrl] = useState(`${Api}`);
  const setData = async (link) => {
    setUrl(link);
    const result = await fetch(`${url}`);
    const response = await result.json();
    return response;
  };
  const data = setData();

  return { data, setData };
};

// const fetchData = async () => {
//   const result = await fetch(
//     `${API_URL}/spaces/?address=${location}&type_of_space=${type_of_space}`
//   );
//   const data = await result.json();
//   navigate("/result", { state: data });
// };

// useEffect(() => {
//   if (firstMount.current === false) {
//     firstMount.current = true;
//     return;
//   }
//   fetchData();
// }, [form]);
