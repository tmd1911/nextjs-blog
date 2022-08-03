
import { NextRouter, withRouter } from 'next/router';
import React from 'react';
import {GetServerSideProps} from 'next'

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

// export const getServerSideProps: GetServerSideProps = async(c) => {
//   console.log("getServerSideProps", c)
//   return {
//     props: {
//       params:c.params
//     }
//   }
// }
