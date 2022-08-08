
import { NextRouter, withRouter } from 'next/router';
import React from 'react';
import { GetServerSideProps } from 'next'
import styles from './layout.module.css'
import Head from 'next/head';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

interface Props {
    router: NextRouter
    children: JSX.Element[]
    home: boolean
}

class State {
}

const name = 'tmd1911';
export const siteTitle = 'Next.js Sample Website';

class Layout extends React.Component<Props, State> {
    state = new State();
    constructor(props: Props) {
        super(props);
        console.log("T constructor", this.props.router);
    }
    render() {
        return (
            <div className={styles.container}>
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                    <meta name="description" content="Learn how to build a personal website using Next.js" />
                    <meta property='og:image' content={`https://og-image.vercel.app/${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`} />
                    <meta name="og:title" content={siteTitle} />
                    <meta name="twitter:card" content="summary_large_image" />
                </Head>
                <header className={styles.header}>
                    {this.props.home ? (
                        <>
                            <Image priority src="/images/profile.jpg" className={utilStyles.borderCircle}
                                height={144} width={144} alt={name} />
                            <h1 className={utilStyles.heading2X1}>{name}</h1>
                        </>
                    ) : (
                        <>
                            <Link href="/">
                                <a>
                                    <Image priority src="/images/profile.jpg" className={utilStyles.borderCircle}
                                        height={108} width={108} alt={name} />
                                </a>
                            </Link>
                            <h2 className={utilStyles.headingLg}>
                                <Link href="/">
                                    <a className={utilStyles.colorInherit}>{name}</a>
                                </Link>
                            </h2>

                        </>
                    )}
                </header>

                <main>
                    {this.props.children}
                </main>

                {!this.props.home && (
                    <div className={styles.backToHome}>
                        <Link href="/">
                            <a>Back to home</a>
                        </Link>
                    </div>
                )}
            </div>
        )
    }
}

export default withRouter(Layout)

// export const getServerSideProps: GetServerSideProps = async(c) => {
//   console.log("getServerSideProps", c)
//   return {
//     props: {
//       params:c.params
//     }
//   }
// }
