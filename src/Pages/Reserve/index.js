import { useEffect } from "react";
import Footer from "react-multi-date-picker/plugins/range_picker_footer";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import API_URL from "../../config";

const Reserve = () => {
  const location = useLocation();
  const id = location.state;

  const fetchData = async () => {
    const result = await fetch(`${API_URL}/spaces/${id}`);
    const data = await result.json();
    console.log(data.payload);
  };

  useEffect(() => {
    fetchData();
  }, [id]);
  return <div></div>;
};

export default Reserve;
