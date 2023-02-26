import Head from "next/head";
import Link from "next/link";
import styles from "./layout.module.css"
import utileStyles from "../styles/utils.module.css"
import Image from "next/image";

const name = "Tomo code"
export const siteTitle = "Next.js blog"

function Layout ({ children, home }) {
    return (
        <div className={styles.container}>
            {/* <Head>
                <Link rel="icon" href="/favicon.ico"></Link>
            </Head> */}
            <header className={styles.header}>
                {home ? (
                    <>
                        <Image
                            src="/images/profile.png"
                            className={`${utileStyles.borderCircle} ${styles.headerHomeImage}`}
                            width={60}
                            height={60}
                            alt="image"
                        />
                        <h1 className={ utileStyles.heading2Xl }>{ name }</h1>
                    </>
                ) : (
                    <>
                        <Image
                            src="/images/profile.png"
                            className={`${utileStyles.borderCircle}`}
                            width={60}
                            height={60}
                            alt="image"
                        />
                        <h1 className={ utileStyles.heading2Xl }>{ name }</h1>
                    </>
                )}
            </header>
            <main>{ children }</main>
            {!home && (
                <Link href="/">←ホームへ戻る</Link>
            )}
        </div>
    )
}

export default Layout