import Head from 'next/head'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div>
      <Head>
        <title>ChenYanfei</title>
        <meta name="description" content="movie,music,image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.hero + ' text-5xl text-center p-8'}>Welcome to my website!</h1>
    </div>
  )
}
