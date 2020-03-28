import Footer from '../components/Footer'
import React from 'react'
import SignInFooter from '../components/SignInFooter'
import SignInForm from '../components/SignInForm'
import SignInSocial from '../components/SignInSocial'

const SignIn = () => {
  return (
    <section className="absolute h-full w-full top-0">
      <div className="absolute top-0 w-full h-full"></div>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4 pt-32">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-gray-600 text-sm font-bold">Anmelden</h6>
                </div>
                {/* <SignInSocial />
                <hr className="mt-6 border-b1 border-gray-400" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-gray-500 text-center mb-3 font-bold">
                  <small>Oder mit Zugangsdaten anmelden</small>
                </div> */}
                <SignInForm />
                <hr className="mt-6 border-b1 border-gray-400" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <SignInFooter />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  )
}

export default SignIn
