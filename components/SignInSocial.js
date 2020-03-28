import GithubButton from './GithubButton'
import GoogleButton from './GoogleButton'
import React from 'react'

// eslint-disable-next-line react/display-name
export default () => (
  <div>
    <div className="text-center mb-3">
      <h6 className="text-gray-600 text-sm font-bold">Anmelden mit</h6>
    </div>
    <div className="btn-wrapper text-center">
      <GithubButton />
      <GoogleButton />
    </div>
  </div>
)
