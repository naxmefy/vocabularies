import React, { Component } from 'react'

import EmailField from './EmailField'
import PasswordField from './PasswordField'
import PropTypes from 'prop-types'
import RememberMeField from './RememberMeField'
import SignInSubmitButton from './SignInSubmitButton'

// eslint-disable-next-line react/display-name
class SignInForm extends Component {
  constructor(props) {
    super(props)
    this.state = { email: '', password: '', rememberMe: false }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleRememberMeChange = this.handleRememberMeChange.bind(this)
  }

  handleSubmit(event) {
    console.log('handleSubmit', event)
    this.props.onSubmit(this.state)
  }

  handleEmailChange(event) {
    console.log('handleEmailChange', event.target.value)
    this.setState({ email: event.target.value })
  }

  handlePasswordChange(event) {
    console.log('handlePasswordChange', event.target.value)
    this.setState({ password: event.target.value })
  }

  handleRememberMeChange(event) {
    console.log('handleRememberMeChange', event.target.value)
    this.setState({ rememberMe: event.target.value === 'on' })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="relative w-full mb-3">
            <EmailField value={this.state.email} onChange={this.handleEmailChange} />
          </div>
          <div className="relative w-full mb-3">
            <PasswordField value={this.state.password} onChange={this.handlePasswordChange} />
          </div>
          <div>
            <RememberMeField value={this.state.rememberMe} onChange={this.handleRememberMeChange} />
          </div>
          <div className="text-center mt-6">
            <SignInSubmitButton />
          </div>
        </form>
      </div>
    )
  }
}
SignInForm.propTypes = {
  onSubmit: PropTypes.func,
}

export default SignInForm
