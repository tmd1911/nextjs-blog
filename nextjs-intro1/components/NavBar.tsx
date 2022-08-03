
import Image from 'next/image';
import Link from 'next/link';
import { NextRouter, withRouter } from 'next/router';
import React from 'react';

interface Props {
  router: NextRouter
}

class State {
}

class NavBar extends React.Component<Props, State> {
  state = new State();
  constructor(props: Props) {
    super(props);
    console.log("NavBar constructor", this.props.router);
  }
  render() {
    return (
        <nav>
          <Image src="/vercel.svg" width={300} height={100}/>
          <div>
            <Link href="/">
                <a className={this.props.router.pathname==='/'?'active':''}>Home</a>
            </Link>
            <Link href="/about">
                <a className={this.props.router.pathname==='/about'?'active':''}>About</a>
            </Link>
          </div>
            <style jsx>{`
              nav {
                display:flex;
                gap:10px;
                flex-direction:column;
                align-items: center;
                padding-top: 20px;
                padding-bottom: 10px;
                box-shadow: rgba(50,50,93,0.25) 0px 50px
                 rgba(0,0,0,0.3) 0px 30px 60px -30px;
              }
              img {
                max-width: 100px;
                margin-bottom: 5px;
              }
              nav a {
                font-weight: 600;
                font-size: 18px;
              }
              .active {
                color: tomato;
              }
              nav div {
                display: flex;
                gap: 10px;
              }
            `}</style>
        </nav>
    )
  }
}

export default withRouter(NavBar)
