import "./App.css";
import Practice from "./Practice/Practice";
import MainRoute from "./Routes/MainRoute";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>

        {/* <MainRoute /> */}
     
      </BrowserRouter>
      <Practice/>
    </div>
  );
}

export default App;
