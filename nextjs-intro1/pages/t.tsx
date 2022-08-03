
import { NextRouter, withRouter } from 'next/router';
import React from 'react';

interface Props {
  router: NextRouter
}

class State {
}

class T extends React.Component<Props, State> {
  state = new State();
  constructor(props: Props) {
    super(props);
    console.log("T constructor", this.props.router);
  }
  render() {
    return (
        <div>
        </div>
    )
  }
}

export default withRouter(T)
