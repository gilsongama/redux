import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import Todos from './Components/Todos';
import User from './Components/User';
import {store} from './Store';



function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <User />
        <Todos />
      </Provider>
    </div>
  );
}

export default App;
