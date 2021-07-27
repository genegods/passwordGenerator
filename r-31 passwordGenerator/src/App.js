import React from "react";
import "./App.css";
import PasswordApp from "./components/user/PasswordApp";
import { store } from "./redux/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <React.Fragment>
        <PasswordApp />
      </React.Fragment>
    </Provider>
  );
};

export default App;
