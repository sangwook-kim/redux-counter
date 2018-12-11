import * as React from 'react';
import ButtonsContainer from './ButtonsContainer';
import CounterContainer from './CounterContainer';

export default class App extends React.Component <{}, {}> {
  render() {
    return (
      <div className="App">
        <ButtonsContainer />
        <CounterContainer />
      </div>
    );
  }
}
