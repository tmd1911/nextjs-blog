import React from 'react';
import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  }
}

interface Props {
  allPostsData: [{id:string, title: string, date:string}]
}

class State {

}

class Home extends React.Component<Props,State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <Layout home={true}>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>[Your Self Introduction]</p>
          <p>
            (This is a sample website - you'll be building a site like this on{' '}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.")
          </p>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {this.props.allPostsData.map(({id,date,title})=>{
              return (
                <li className={utilStyles.listItem} key={id}>
                    <Link href={`/posts/${id}`}>
                      <a>{title}</a>
                    </Link>
                    <br />
                    <small className={utilStyles.lightText}>
                      <Date dateString={date} />
                    </small>
                </li>
              )
            })}
          </ul>
        </section>
      </Layout>
    )
  }
}

export default Home;