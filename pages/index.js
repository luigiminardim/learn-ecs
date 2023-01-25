import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home({ host, nginxMessage }) {
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
        <p>You are at {host}</p>
        <p>Nginx sad: {nginxMessage}</p>
      </main>
    </div>
  )
}

/** Get the hostname */
export const getServerSideProps = async (context) => {
  const { host, 'nginx-message': nginxMessage } = context.req.headers;
  console.log(context.req.headers)
  return {
    props: {
      host,
      nginxMessage
    },
  }
}