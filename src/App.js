import './styles/default.scss';
import { Provider } from 'react-redux';
import { store } from "./store/initStore";
import MainPage from "./Pages/MainPage/MainPage";

function App() {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
}

export default App;
