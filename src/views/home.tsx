import { fetchTabledata } from "../api";
import Table from "../components/Table";

const Home = () => {
  console.log(fetchTabledata());
  return (
    <div>
      home
      <Table />
    </div>
  );
};

export default Home;
