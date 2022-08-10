import Routes from "./routes";
import { ToastContainer } from "react-toastify";
import "./styled/app.css";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <div className="App">
      <Routes />
      <ToastContainer />
    </div>
  );
}

export default App;
