import MealForm from "../Form/MealForm";

import getApiData from "../../getApiData/getApiData";
import Card from "../Card/Card";

const App = () => {
  getApiData();

  return (
    <div className="App">
      <Card />
    </div>
  );
};

export default App;
