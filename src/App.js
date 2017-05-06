import React, { Component } from 'react';
import './App.css';
import {FlagOfChina, FlagOfUS, FlagOfFrance, FlagOfItaly, FlagOfGermany} from './countries';
import {FlagOfRussia, UnionFlag} from './countries';

class Resize extends Component {
  getWidth() {
    return window.innerWidth * 0.4-40;
  }

  constructor() {
    super();
    this.state = {
      width: this.getWidth()
    };
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  updateDimensions() {
    this.setState({width: this.getWidth()});
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, {
        width: this.state.width,
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
      <FlagOfUS />
      <UnionFlag />
      <FlagOfChina />
      <FlagOfFrance />
      <FlagOfItaly />
      <FlagOfGermany />
      <FlagOfRussia />
    </Resize>
  );
}
export default App;
