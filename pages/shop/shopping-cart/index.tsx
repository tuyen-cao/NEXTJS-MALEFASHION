import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import { ReactElement } from 'react'
import Layout from '../../../components/common/Layout'
import Layout2Cols from '../../../components/common/Layout2Cols'
import RightSideBar from '../../../components/common/RightSideBar'

const ShoppingCart = () => {
  return (
    <div>
      shopping-cart
      <p>
        <Link href="/shop">Back to shop</Link></p>
    </div>
  )
}

export default ShoppingCart

ShoppingCart.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <Head>
        <title>SHOP page</title>
      </Head>

      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <Layout2Cols>
        <div className="col-lg-8">{page}</div>
        <RightSideBar><p>Right Side bar</p><p>Side bar gfjdsgfjfjhfjfgh</p></RightSideBar>
      </Layout2Cols>
    </Layout>
  )
}



