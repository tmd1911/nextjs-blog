
import { NextRouter, withRouter } from 'next/router';
import React from 'react';
import NavBar from './NavBar';

interface Props {
  router: NextRouter
  children: JSX.Element[]
}

class State {
}

class Layout extends React.Component<Props, State> {
  state = new State();
  constructor(props: Props) {
    super(props);
    console.log("Layout constructor", this.props.router);
  }
  render() {
    return (
        <>
        <NavBar />
        <div>{this.props.children}</div>
        </>
    )
  }
}

export default withRouter(Layout)
