import React from 'react';
import Number from './Number';

class FirstApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 }
  }
  onClick = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };
  render() {
    return (
      <><h1>This is my first Assignment</h1>
        <div>
          <Number number={this.state.count} />
          <button onClick={this.onClick.bind(this)}>Count</button>
        </div>
      </>
    );
  }
}

export default FirstApp;