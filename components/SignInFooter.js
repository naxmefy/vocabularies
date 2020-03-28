import Link from 'next/link'
import React from 'react'

// eslint-disable-next-line react/display-name
export default () => (
  <div>
    <div className="text-gray-500 text-center mb-3 font-bold">
      <small>Hilfe erforderlich?</small>
    </div>

    <div className="flex flex-wrap mt-6">
      <div className="w-1/2 text-right">
        <Link href="/forgot-password">
          <a className="text-gray-800">
            <small>Passwort vergessen?</small>
          </a>
        </Link>
      </div>
      <div className="w-1/2 pl-2">
        <Link href="/sign-up">
          <a className="text-gray-800">
            <small>Neues Konto anlegen</small>
          </a>
        </Link>
      </div>
    </div>
  </div>
)
