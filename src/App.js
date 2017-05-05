import React, { Component } from 'react';
import './App.css';
import {FlagOfChina, FlagOfUS} from './countries';

class Resize extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight
    };
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  updateDimensions() {
    this.setState({width: window.innerWidth, height: window.innerHeight});
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    let updateWidth = this.state.width;
    if (this.props.children.length === 2) {
      updateWidth = Math.min(this.state.width, this.state.height / (1+1.9/1.6) * 1.9) * 0.9;
    }
    const childrenWithProps = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, {
        width: updateWidth,
      })
    );

    return (
      <div className="container">
        {childrenWithProps}
      </div>
    );
  }
}

function App() {
  return (
    <Resize>
      <FlagOfChina />
      <FlagOfUS />
    </Resize>
  );
}
export default App;
