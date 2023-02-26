import Head from "next/head";
import Link from "next/link";
import styles from "./layout.module.css"
import utileStyles from "../styles/utils.module.css"

const name = "Tomo code"
export const siteTitle = "Next.js blog"

function Layout ({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <Link rel="icon" href="/favicon.ico"></Link>
            </Head>
            <heaer className={styles.header}>
                {home ? (
                    <>
                        <img
                            src="/images/profile.png"
                            className={`${utileStyles.borderCircle} ${styles.headerHomeImage}`}
                        />
                        <h1 className={ utileStyles.heading2Xl }>{ name }</h1>
                    </>
                ) : (
                    <>
                        <img
                            src="/images/profile.png"
                            className={`${utileStyles.borderCircle}`}
                        />
                        <h1 className={ utileStyles.heading2Xl }>{ name }</h1>
                    </>
                )}
            </heaer>
            <main>{ children }</main>
            {!home && (
                <Link href="/">←ホームへ戻る</Link>
            )}
        </div>
    )
}

export default Layout