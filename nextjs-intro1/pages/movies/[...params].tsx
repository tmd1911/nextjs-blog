
import { NextRouter, withRouter } from 'next/router';
import React from 'react';

interface Props {
  router: NextRouter
}

class State {
}

class MovieDetail extends React.Component<Props, State> {
  state = new State();
  constructor(props: Props) {
    super(props);
    console.log("MovieDetail constructor, router", this.props.router);
  }
  // https://nomadcoders.co/nextjs-fundamentals/lectures/3452
  render() {
    return (
        <div>
            <h4>{this.props.router.query.title || "Loading"}</h4>
            <h4>{this.props.router.query.params || "Loading"}</h4>
        </div>
    )
  }
}

export default withRouter(MovieDetail)
