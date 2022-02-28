import { useEffect } from "react";
import Footer from "../../components/Footer";
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
  }, []);
  return (
    <div>
      <Header />
      <Footer/>
    </div>
  );
};

export default Reserve;
