import Head from "next/head";
import Link from "next/link";

const name = "Shin code"
export const siteTitle = "Next.js blog"

function Layout ({ children }) {
    return (
        <div>
            <Head>
                <Link rel="icon" href="/favicon.ico"></Link>
            </Head>
            <heaer>
                <img src="/images/profile.png" />
                <h1>{ name }</h1>
            </heaer>
            <main>{ children }</main>
        </div>
    )
}

export default Layout