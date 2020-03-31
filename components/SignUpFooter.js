import Link from 'next/link'
import React from 'react'

// eslint-disable-next-line react/display-name
const SignUpFooter = () => (
  <div>
    <div className="text-gray-500 text-center mb-3 font-bold">
      <small>oder</small>
    </div>

    <div className="flex flex-wrap justify-center mt-6">
      <div className="flex-row w-full text-center">
        <Link href="/forgot-password">
          <a className="text-gray-800">
            <small>Passwort vergessen?</small>
          </a>
        </Link>
      </div>
      <div className="flex-row w-full text-center">
        <Link href="/sign-in">
          <a className="text-gray-800">
            <small>Mit bestehenden Account anmelden</small>
          </a>
        </Link>
      </div>
    </div>
  </div>
)

export default SignUpFooter
