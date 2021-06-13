import { useEffect } from "react";
import { fetchTabledata } from "../api";
import Table from "../components/Table";
import "./home.scss";

const Home = () => {
  console.log(fetchTabledata());

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchTabledata();
        console.log(data);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="homeView">
      <h2>nimekiri</h2>
      <Table />
    </div>
  );
};

export default Home;
