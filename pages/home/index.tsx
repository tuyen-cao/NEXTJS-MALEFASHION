import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Layout from '../../components/common/Layout/Layout'

const Home = () => {
  return (
    <>
      <Layout >
        <Head>
          <title>Home page</title>
        </Head>

        <main>
          Home page
          aaaaaa

          <Link href="/">
                home page
            </Link>

        </main>
      </Layout>
    </>
  )
}

export default Home
