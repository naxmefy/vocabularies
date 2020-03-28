import GithubButton from './GithubButton'
import GoogleButton from './GoogleButton'
import React from 'react'

// eslint-disable-next-line react/display-name
export default () => (
  <div>
    <div className="btn-wrapper text-center">
      <GithubButton />
      <GoogleButton />
    </div>
  </div>
)
