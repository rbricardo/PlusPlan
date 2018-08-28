import React from "react";
// Redux
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import reducers from "./reducers";
// Components
import HomeScreen from "./screens/HomeScreen";

const middlewares = [thunkMiddleware];

const App = () => (
  <Provider
    store={createStore(
      reducers,
      compose(
        applyMiddleware(...middlewares),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      )
    )}
  >
    <HomeScreen />
  </Provider>
);
export default App;
