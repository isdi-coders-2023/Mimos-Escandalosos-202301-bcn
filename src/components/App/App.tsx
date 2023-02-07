import getApiData from "../../getApiData/getApiData";
import Card from "../Card/Card";

const App = () => {
  getApiData();

  return <Card />;
};

export default App;
