import React from 'react'
import {NextRouter, withRouter} from 'next/router'

interface Props {
    router: NextRouter
}

class Id extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const id = Number(this.props.router.query.id);
        return (
            <div>
              <h1>/pages/sub/{id}.js</h1>
              <ul>
                <li><a href="/">/pages/index.js</a></li>
                <li><a href="/sub">/pages/sub/index.js</a></li>
                <li><a href="/sub/about">/pages/sub/about.js</a></li>
                <li><a href="/sub/1">/pages/sub/1</a></li>
                <li><a href="/sub/2">/pages/sub/2</a></li>
              </ul>
            </div>
        )
    }
}

export default withRouter(Id);
