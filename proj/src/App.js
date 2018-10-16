import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store'
// import Counter from 'components/counter/Counter'
import Todos from 'components/todos/Todos'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Todos/>
      </Provider>
    );
  }
}

export default App;
