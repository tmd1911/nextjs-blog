
import Head from 'next/head'
import { NextRouter, withRouter } from 'next/router';
import React from 'react';

interface Props {
  router: NextRouter
  title: string
}

class State {
}

class Seo extends React.Component<Props, State> {
  state = new State();
  constructor(props: Props) {
    super(props);
    console.log("Seo constructor", this.props.router);
  }
  render() {
    return (
        <Head><title>{this.props.title} | Next Movies</title></Head>
    )
  }
}

export default withRouter(Seo)
