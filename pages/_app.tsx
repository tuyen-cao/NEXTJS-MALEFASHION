import './../assets/scss/global.scss'

import "./../assets/css/font-awesome.min.css"
import './../assets/css/elegant-icons.css'
import "./../assets/css/magnific-popup.css"
import "./../assets/css/nice-select.css"
import "./../assets/css/owl.carousel.min.css"
import "./../assets/css/slicknav.min.css"

import './../assets/scss/style.scss'

import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(<Component {...pageProps} />)
}