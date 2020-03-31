import React, { Component } from 'react'

import AppNavLayout from '../components/AppNavLayout'
import SignInFooter from '../components/SignInFooter'
import SignInForm from '../components/SignInForm'

// import SignInSocial from '../components/SignInSocial'

class SignIn extends Component {
  static getInitialProps({ req }) {
    const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http'

    const apiUrl = process.browser
      ? `${protocol}://${window.location.host}/api/login.js`
      : `${protocol}://${req.headers.host}/api/login.js`

    return { apiUrl }
  }

  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    console.log('submit', arguments)
  }

  render() {
    return (
      <AppNavLayout>
        <div className="container mx-auto px-4 h-full">
          <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-4/12 px-4 pt-6">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                <div className="rounded-t mb-0 px-6 py-6">
                  <div className="text-center mb-3">
                    <h6 className="text-gray-600 text-sm font-bold">Sign In</h6>
                  </div>
                  <SignInForm onSubmit={this.handleSubmit} />
                  <hr className="mt-6 border-b1 border-gray-400" />
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <SignInFooter />
                </div>
              </div>
            </div>
          </div>
        </div>
      </AppNavLayout>
    )
  }
}

export default SignIn
