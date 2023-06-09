import { fetchData } from "../vendure/Vendure";
import { useEffect, useState } from "react";
import Navbar from "./navbar/Navbar";
import MidContent from "./mid_content/MidContent";
import Footer from "./footer/Footer";

const Index = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetchData();
      setData(fetchedData);
    };

    getData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }
  console.log("Products", data);
  return (
    <>
      <Navbar />
      <MidContent data={data} />
      <Footer />
    </>
  );
};

export default Index;
