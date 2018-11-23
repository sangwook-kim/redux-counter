import * as React from 'react';
import CounterContainer from '../containers/CounterContainer';

export default class App extends React.Component <{}, {}> {
  render() {
    return (
      <div>
        <CounterContainer />
      </div>
    );
  }
}
