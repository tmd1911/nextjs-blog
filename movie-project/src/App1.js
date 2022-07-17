import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header/header';
import styled from 'styled-components';
import * as data1 from './data';

const StyledDiv = styled.div`
background-color:red;
width:300px;
height:300px;
`;
const Button = styled.button`
background:${props=> (props.primary ? 'palevioletred' : 'white')};
color: ${props=> (props.primary ? 'white' : 'palevioletred')};
`;

class App1 extends Component {
  state = {
    movieData: data1,
    headerMessage: "영화 소개 프로젝트"
  };
  constructor(props) {
    super(props);
    console.log('constructor');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  render() {
    console.log('render');
    return (
      <div className="App">
        <Header headerMessage={this.state.headerMessage}/>
        <div>
            Main content
        </div>
        <Button> not primary </Button>
        <Button primary>Primary</Button>
        <StyledDiv/>
      </div>
    );
  }
}

export default App1;
