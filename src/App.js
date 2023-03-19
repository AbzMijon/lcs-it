import { BrowserRouter } from "react-router-dom";
import RootRoute from "./Routes/RootRouter";
import './styles/default.scss';

function App() {
  return (
    <BrowserRouter>
        <RootRoute/>
    </BrowserRouter>
  );
}

export default App;
