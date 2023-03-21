import { BrowserRouter } from "react-router-dom";
import RootRoute from "./Routes/RootRouter";
import './styles/default.scss';
import { Provider } from 'react-redux';
import { store } from "./store/initStore";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
          <RootRoute/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
