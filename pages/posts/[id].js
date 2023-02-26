import Layout from "@/components/Layout";
import { getAllPostIds, getPostData } from "@/lib/post";
import utileStyles from "../../styles/utils.module.css"

export async function getStaticPaths() {
    const paths = getAllPostIds()

    return {
        paths,
        fallback: false,
    }
}

// paramsはブログのデータ：pre-renderring.mdの中身
export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)

    return {
        props: {
            postData,
        }
    }
}

export default function Post({ postData }) {
    return (
        <Layout>
            <article>
                <h1 className={utileStyles.headingX1}>{postData.title}</h1>
                <div className={utileStyles.lightText}>{postData.date}</div>
                <div
                    dangerouslySetInnerHTML={{ __html: postData.blogContentHTML }} 
                />
            </article>
        </Layout>
    );
}