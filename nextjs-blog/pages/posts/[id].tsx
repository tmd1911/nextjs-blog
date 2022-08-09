import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import { ParsedUrlQuery } from "querystring";
import Head from "next/head";
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

interface Props {
    postData: {
        id:string,
        title:string,
        date:string
        contentHtml:string
    }
}

class State {

}

class Post extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }
    render() {
        return (
            <Layout home={false}>
                <Head>
                    <title>{this.props.postData.title}</title>
                </Head>
                <article>
                    <h1 className={utilStyles.headingX1}>{this.props.postData.title}</h1>
                    <div className={utilStyles.lightText}>
                        <Date dateString={this.props.postData.date} />
                    </div>
                <div dangerouslySetInnerHTML={{__html: this.props.postData.contentHtml }} />
                </article>
            </Layout>
        )
    }
}

export default Post;

export const getStaticPaths: GetStaticPaths = async() => {
    const paths = getAllPostIds();
    return {
        paths, fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async(context) => {
    interface P extends ParsedUrlQuery {
        id: string
    }
    const params = context.params as P
    const postData = await getPostData(params.id)
    return {
        props: {
            postData,
        }
    }
}
