
import { NextRouter, withRouter } from 'next/router';
import React from 'react';

interface Props {
  router: NextRouter
}

class State {
}

class MoviesIndex extends React.Component<Props, State> {
  state = new State();
  constructor(props: Props) {
    super(props);
    console.log("MoviesIndex constructor", this.props.router);
  }
  render() {
    return (
        <div>
            Movies Index
        </div>
    )
  }
}

export default withRouter(MoviesIndex)
