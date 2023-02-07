import getApiData from "../../getApiData/getApiData";

const App = () => {
  getApiData();
  return (
    <div className="App">
      <iframe
        title="giphy"
        src="https://giphy.com/embed/lgCvugdD94F6o"
        width="480"
        height="382"
        className="giphy-embed"
        allowFullScreen
      />
      <span>Under construction. Coming soon.</span>
    </div>
  );
};

export default App;
