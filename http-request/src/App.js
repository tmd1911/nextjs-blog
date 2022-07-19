import React,{Component} from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    apiResponse: []
  }

  requestApi = () => {
    axios.get('https://baconipsum.com/api/?type=meat-and-filter').then((res) => {
      this.setState({
        // apiResponse: [...this.state.apiResponse, ...res.data]
        apiResponse: [...this.state.apiResponse, ...res.data]
      });
      console.log(res);
    }).catch((err)=>{
      console.log(err);
    })
  }

  componentDidMount() {
    this.requestApi();
  }

  render() {
    const renderText = (apiResponseArray) => {
      return apiResponseArray.map((v,k)=>{
        return <p key={k}>{v}</p>
      })
    }
    return (
      <div className="App">
        {renderText(this.state.apiResponse)}
        <div>
          <button onClick={this.requestApi}>Call API request</button>
        </div>
      </div>
    )
  }
}

export default App;
