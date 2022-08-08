
import { NextRouter, withRouter } from 'next/router';
import React from 'react';
import {GetServerSideProps} from 'next'
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';

interface Props {
  router: NextRouter
}

class State {
}

class FirstPost extends React.Component<Props, State> {
  state = new State();
  constructor(props: Props) {
    super(props);
    console.log("FirstPost constructor", this.props.router);
  }
  render() {
    return (
        <Layout home={false}>
            <Head>
                <title>First Post</title>
            </Head>
            {/* <Script src="https://connect.facebook.net/en_US/sdk.js"
                    strategy='lazyOnload'
                    onLoad={()=>console.log('SCRIPT LOaded correctly, window.FB has been populated')}></Script> */}
            <h1>First Post</h1>
            <Image src="/images/profile.jpg" height={144} width={144} alt="d"/>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </Layout>
    )
  }
}

export default withRouter(FirstPost)

// export const getServerSideProps: GetServerSideProps = async(c) => {
//   console.log("getServerSideProps", c)
//   return {
//     props: {
//       params:c.params
//     }
//   }
// }
