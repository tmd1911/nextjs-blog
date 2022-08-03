import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react'

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>/pages/index.js</h1>
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

export default Home;