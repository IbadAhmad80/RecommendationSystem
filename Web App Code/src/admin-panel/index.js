import { createStore } from "redux";

import { Provider } from "react-redux";

import rootReducer from "./redux/reducers";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./assets/css/grid.css";
import "./assets/css/theme.css";
import "./assets/css/index.css";
import Layout from "./components/layout/Layout";

const store = createStore(rootReducer);

const AdminPanel = () => {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
};

export default AdminPanel;
