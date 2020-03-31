import React, { Component } from 'react'

import EmailField from './EmailField'
import PasswordField from './PasswordField'
import PropTypes from 'prop-types'
import SubmitButton from './SubmitButton'

// eslint-disable-next-line react/display-name
class SignInForm extends Component {
  constructor(props) {
    super(props)
    this.state = { email: '', password: '', passwordRepeat: '', rememberMe: false }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handlePasswordRepeatChange = this.handlePasswordRepeatChange.bind(this)
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

  handlePasswordRepeatChange(event) {
    console.log('handlePasswordRepeatChange', event.target.value)
    this.setState({ passwordRepeat: event.target.value })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="relative w-full mb-3">
            <EmailField label={'Email'} name={'email'} value={this.state.email} onChange={this.handleEmailChange} />
          </div>
          <div className="relative w-full mb-3">
            <PasswordField
              label={'Password'}
              name={'password'}
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </div>
          <div className="relative w-full mb-3">
            <PasswordField
              label={'Repeat Password'}
              name={'passwordRepeat'}
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </div>
          <div className="text-center mt-6">
            <SubmitButton label={'Sign Up'} />
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
