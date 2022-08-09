import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import { ParsedUrlQuery } from "querystring";

interface Props {
    postData: {
        id:string,
        title:string,
        date:string
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
                <div>{this.props.postData.title}</div>
                <br/>
                <div>{this.props.postData.id}</div>
                <br/>
                <div>{this.props.postData.date}</div>
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
    const postData = getPostData(params.id)
    return {
        props: {
            postData,
        }
    }
}
