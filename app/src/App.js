import "./App.css";
import LoadingSpinner from "./Practice/LoadingSpinner";
import Practice from "./Practice/Practice";
import MainRoute from "./Routes/MainRoute";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>

        {/* <MainRoute /> */}
     
      </BrowserRouter>
      {/* <LoadingSpinner/> */}
      {/* <Practice/> */}
    </div>
  );
}

export default App;
