import EmailField from './EmailField'
import PasswordField from './PasswordField'
import React from 'react'
import RememberMeField from './RememberMeField'
import SignInSubmitButton from './SignInSubmitButton'

// eslint-disable-next-line react/display-name
export default () => (
  <div>
    <div className="text-gray-500 text-center mb-3 font-bold">
      <small>Oder mit Zugangsdaten anmelden</small>
    </div>
    <form>
      <div className="relative w-full mb-3">
        <EmailField />
      </div>
      <div className="relative w-full mb-3">
        <PasswordField />
      </div>
      <div>
        <RememberMeField />
      </div>
      <div className="text-center mt-6">
        <SignInSubmitButton />
      </div>
    </form>
  </div>
)
