
import { NextRouter, withRouter } from 'next/router';
import React from 'react';

interface Props {
  router: NextRouter
}

class State {
}

class All extends React.Component<Props, State> {
  state = new State();
  constructor(props: Props) {
    super(props);
    console.log("All constructor", this.props.router);
  }
  render() {
    return (
        <div>
            Movies All
        </div>
    )
  }
}

export default withRouter(All)
