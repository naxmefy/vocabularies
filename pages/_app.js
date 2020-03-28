import '../styles/app.css'

import React from 'react'

/* eslint react/prop-types: 0 */
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
