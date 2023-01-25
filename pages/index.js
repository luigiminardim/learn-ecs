import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home({ hostname }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js</a> on Luigi's Docker!
        </h1>
        <p>You are at {hostname}</p>
      </main>
    </div>
  )
}

/** Get the hostname */
export const getServerSideProps = async (context) => {
  const hostname = context.req.headers.host;
  return {
    props: {
      hostname,
    },
  }
}