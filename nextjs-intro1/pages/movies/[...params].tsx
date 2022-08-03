
import { NextRouter, withRouter } from 'next/router';
import React from 'react';
import {GetServerSideProps} from 'next'
import Seo from '../../components/Seo';

interface Props {
  router: NextRouter
  ps:string[]
}

class State {
}

class MovieDetail extends React.Component<Props, State> {
  state = new State();
  title?: string
  id?: string
  constructor(props: Props) {
    super(props);
    console.log("MovieDetail constructor, router", this.props.router);
    let ps = this.props.ps;//router.query.params
    console.log("MovieDetail constructor, router query params", ps);
    if (ps && ps instanceof Array) {
      this.title = ps.length > 0 ? ps[0] : ""
      this.id = ps.length > 1 ? ps[1] : ""
    }
    if (ps && Array.isArray(ps)) {
      this.title = ps.length > 0 ? ps[0] : ""
      this.id = ps.length > 1 ? ps[1] : ""
    }
  }
  // https://nomadcoders.co/nextjs-fundamentals/lectures/3452
  render() {
    return (
        <div>
          <Seo title={this.title ?? ""}/>
            <h4>{this.title || "Loading"}</h4>
        </div>
    )
  }
}

export default withRouter(MovieDetail)

export const getServerSideProps: GetServerSideProps = async(c) => {
  console.log("getServerSideProps, params", c.params && c.params.params)
  return {
    props: {
      ps:c.params ? c.params.params : []
    }
  }
}
