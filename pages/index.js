import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Layout from "../components/Layout"
import utilStyle from '../styles/utils.module.css'
import { getPostsData } from '@/lib/post'

import Link from "next/link"

// SSGの場合（外部から１回だけデータを持ってくる）
export async function getStaticProps() {
  const allPostsData = getPostsData() // id, title, date, thumbnail

  return {
    props: {
      allPostsData,
    },
  }
}

// SSRの場合
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // コンポーネントに渡すためのprops
//       allPostsData,
//     },
//   }
// }

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <section className={utilStyle.headingMd}>
        <p>私は受託開発会社でエンジニアをやっています。</p>
      </section>

      <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
        <h2>エンジニアのブログ</h2>
        <div className={styles.grid}>
          {allPostsData.map(({ id, title, date, thumbnail }) => (
            <article key={id}>
            <Link href={`/posts/${id}`}>
              <img src={`${thumbnail}`}
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href={`/posts/${id}`}
              className={utilStyle.boldText}
            >
              {title}
            </Link>
            <br />
            <small className={utilStyle.lightText}>
              {date}
            </small>
          </article>
        ))}
        </div>
      </section>
    </Layout>
  );
}
