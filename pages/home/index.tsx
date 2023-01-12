import {  Layout, MainLayout } from '@/components/common/layout'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <>
      <Layout>
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
