import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header';

class App extends Component {
  state = {
    count: 0
  };
  up() {
    this.setState({
      count:this.state.count+1
    });
  }
  down() {
    this.setState({
      count:this.state.count-1
    });
  }
  render() {
    const v = "The Variable";
    return (
      <div className="App" style={{color:'red'}}>
        <Header/>
        Movie Project {this.state.count}
        <button onClick={this.up.bind(this)}>Up!</button>
        <button onClick={this.down.bind(this)}>Down!</button>
        <PropsTestClass count={this.state.count}/>
      </div>
    );
  }
}

class PropsTestClass extends Component {
  render() {
    return (
      <div>
        <div>
        <span>Hello I am testClass</span>
        </div>
        <div>
          받은 props의 데이터는 {this.props.count}
        </div>
        </div>
    )
  }
}

export default App;
