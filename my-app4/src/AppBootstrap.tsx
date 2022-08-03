import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,ButtonToolbar} from 'react-bootstrap'
// yarn add react-bootstrap bootstrap
class AppBootstrap extends React.Component {
  state = {number: 0};
  increment_onclick() {
    this.setState({number:this.state.number+25});
  }
  decrement_onclick() {
    this.setState({number:this.state.number-1});
  }
  render() {
    return (
      <div>
        <h1>{this.state.number}</h1>
        <Button onClick={this.increment_onclick.bind(this)}>+</Button>
        <Button onClick={this.decrement_onclick.bind(this)}>-</Button>
        <br/>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="info">Info</Button>
        <Button variant="light">Light</Button>
        <Button variant="dark">Dark</Button>
        <Button variant="link">Link</Button>
      </div>
    );
  }
}

export default AppBootstrap;
