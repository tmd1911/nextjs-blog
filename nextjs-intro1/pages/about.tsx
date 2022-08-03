
import Head from 'next/head';
import { NextRouter, withRouter } from 'next/router';
import React from 'react';
import NavBar from '../components/NavBar'
import Seo from '../components/Seo';

interface Props {
  router: NextRouter
}

class State {
}

class About extends React.Component<Props, State> {
  state = new State();
  constructor(props: Props) {
    super(props);
    console.log("About constructor", this.props.router);
  }
  render() {
    return (
        <div>
          <Seo title="About"/>
          <h1>About</h1>
        </div>
    )
  }
}

export default withRouter(About)
