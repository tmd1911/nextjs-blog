
import Link from 'next/link';
import { NextRouter, withRouter } from 'next/router';
import React from 'react';
import styles from './NavBar2.module.css'

interface Props {
  router: NextRouter
}

class State {
}

class NavBar2 extends React.Component<Props, State> {
  state = new State();
  constructor(props: Props) {
    super(props);
    console.log("NavBar2 constructor", this.props.router);
  }
  render() {
    return (
        <nav>
            <Link href="/">
                <a className={`${styles.link} ${this.props.router.pathname==='/'?styles.active:''}`}>Home</a>
            </Link>
            <Link href="/about">
                <a className={[styles.link,this.props.router.pathname==='/about'?styles.active:''].join(" ")}>About</a>
            </Link>
        </nav>
    )
  }
}

export default withRouter(NavBar2)
