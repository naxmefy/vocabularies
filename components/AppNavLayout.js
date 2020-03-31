import Footer from './Footer'
/* eslint-disable react/prop-types */
import Header from './Header'
import React from 'react'

// eslint-disable-next-line react/display-name
export default props => (
  <div>
    <Header withNav={true} />
    {props.children}
    <Footer />
  </div>
)
