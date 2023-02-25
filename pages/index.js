import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Layout from "../components/Layout"
import utilStyle from '../styles/utils.module.css'

import Link from "next/link"

export default function Home() {
  return (
    <Layout>
      <section className={utilStyle.headingMd}>
        <p>私は受託開発会社でエンジニアをやっています。</p>
      </section>

      <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
        <h2>エンジニアのブログ</h2>
        <div className={styles.grid}>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/"
              className={utilStyle.boldText}
            >
              SSGとSSRの使いわけの場面はいつなのか？
            </Link>
            <br />
            <small className={utilStyle.lightText}>
              February 23
            </small>
          </article>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/"
              className={utilStyle.boldText}
            >
              SSGとSSRの使いわけの場面はいつなのか？
            </Link>
            <br />
            <small className={utilStyle.lightText}>
              February 23
            </small>
          </article>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/"
              className={utilStyle.boldText}
            >
              SSGとSSRの使いわけの場面はいつなのか？
            </Link>
            <br />
            <small className={utilStyle.lightText}>
              February 23
            </small>
          </article>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/"
              className={utilStyle.boldText}
            >
              SSGとSSRの使いわけの場面はいつなのか？
            </Link>
            <br />
            <small className={utilStyle.lightText}>
              February 23
            </small>
          </article>
        </div>
      </section>
    </Layout>
  );
}
