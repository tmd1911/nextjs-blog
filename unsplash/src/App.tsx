import React from 'react';
import logo from './logo.svg';
import './App.scss';
import axios from 'axios';
import PictureList from './components/picture-list';
import LoadMore from './LoadMore';
import Loader from './components/Loader';

// import PictureList from './container/'

class App extends React.Component {
  state = {
    images: [],
    isPending: false
  }

  getImages = () => {
    this.setState({isPending: true});
    axios.get('https://api.unsplash.com/photos/random', {
      params: {
        client_id: "BOaf8vldhVDHwN7z_OhmJdz1d6ypSe3CCMiV7JjUJWQ",
        count: 30
      }
    })
    .then(rs => {
      this.setState({
        images: [...this.state.images,...rs.data.map((image: any)=>image.urls.small)],
        isPending: false
      })
    })
    .catch(err => {
      console.log(err);
      this.setState({
        isPending: false
      });
    })
  }

  componentDidMount() {
    this.getImages()
  }
  render() {
    return (
      <div className="App">
        <span>Let's start</span>
        <PictureList images={this.state.images}/>
        <LoadMore loadMore={this.getImages}/>
        {this.state.isPending && <Loader/>}
      </div>
    );
  }
}

export default App;
