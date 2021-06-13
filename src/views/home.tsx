import { fetchTabledata } from "../api";

const Home = () => {
  console.log(fetchTabledata());
  return <div>home</div>;
};

export default Home;
