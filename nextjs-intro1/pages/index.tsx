
import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import { NextRouter, withRouter } from 'next/router';
import React from 'react';
import NavBar from '../components/NavBar';
import Seo from '../components/Seo';

interface Props {
  router: NextRouter
  results: []
}

class State {
  movies?: Array<any>
}

class Home extends React.Component<Props, State> {
  state = new State();

  constructor(props: Props) {
    super(props);
    console.log("Home constructor router", this.props.router);
    console.log("Home constructor results", this.props.results);
    this.state = { movies: this.props.results }
  }

  componentDidMount = () => {

    // axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.API_KEY}`)
    // .then((res)=>{
    //   console.log(res.data);
    //   res.data.results
    // })

    // (async ()=> {
    //   const res = await fetch(`/api/popular`);
    //   const data = await res.json();
    //   console.log("componentDidMount", data);
    //   this.setState({movies: data.results})
    // })();

    // fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${this.API_KEY}`)
    // .then((res)=>{
    //   console.log("componentDidMount", res.body);
    // })

    // https://nomadcoders.co/nextjs-fundamentals/lectures/3446
  }

  movie_onclick = (id: string, title: string) => {
    // this.props.router.push(`/movies/${id}`)
    this.props.router.push({
      pathname: `/movies/${title}/${id}`,
      query: {
        title: title,
      },
    }, `/movies/${title}/${id}`);
  }

  render() {
    return (
      <div className='container'>
        <Seo title="Home" />
        {this.state.movies?.toString()}
        {!this.state.movies && <h4>Loading...</h4>}
        {this.state.movies?.map((v: any, k: number) => {
          return (
            <div key={k} className="movie">
              <img onClick={() => this.movie_onclick(v.id, v.original_title)} src={`https://image.tmdb.org/t/p/w500/${v.poster_path}`} />
              <h4><Link href={{
                pathname: `/movies/${v.original_title}/${v.id}`,
                query: {
                  title: v.title,
                },
              }} as={`/movies/${v.original_title}/${v.id}`}><a>{v.original_title}</a></Link></h4>
            </div>
          )
        })}
        <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
        `}</style>
      </div>
    )
  }
}

export default withRouter(Home)

export async function getServerSideProps() {
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);
  const data = await res.json();

  return {
    props: {
      results: data.results
    }
  }
}
