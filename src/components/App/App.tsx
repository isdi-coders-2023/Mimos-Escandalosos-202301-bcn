import getApiData from "../../getApiData/getApiData";

import MealForm from "../Form/MealForm";

const App = () => {
  getApiData();

  return <MealForm />;
};

export default App;
