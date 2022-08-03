
import axios from 'axios';
import Head from 'next/head';
import { NextRouter, withRouter } from 'next/router';
import React from 'react';
import NavBar from '../components/NavBar';
import Seo from '../components/Seo';

interface Props {
  router: NextRouter
}

class State {
  movies?:Array<any>
}

class Home extends React.Component<Props, State> {
  state = new State();
  API_KEY = "ee953e75536872478cf05bd3b6583e4e"
  constructor(props: Props) {
    super(props);
    console.log("Home constructor", this.props.router);
  }

  componentDidMount = () => {
    
    // axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.API_KEY}`)
    // .then((res)=>{
    //   console.log(res.data);
    //   res.data.results
    // })

    (async ()=> {
      const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${this.API_KEY}`);
      const data = await res.json();
      console.log("componentDidMount", data);
      this.setState({movies: data.results})
    })();

    // fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${this.API_KEY}`)
    // .then((res)=>{
    //   console.log("componentDidMount", res.body);
    // })
    
  }

  render() {
    return (
      <div>
        <Seo title="Home"/>
        {this.state.movies}
        {!this.state.movies && <h4>Loading</h4>}
        {this.state.movies?.map((v:any,k:number)=>{
        return (
          <div key={k}>
            <h4>{v.original_title}</h4>
          </div>
        )
        })}
      </div>
    )
  }
}

export default withRouter(Home)
