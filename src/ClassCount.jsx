import { Component } from "react";

class ClassCount extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h3>Count: {this.props.count}</h3>;
  }
}

export default ClassCount;
