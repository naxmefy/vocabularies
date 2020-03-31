import PropTypes from 'prop-types'
import React from 'react'

const style = {
  transition: 'all 0.15s ease 0s',
}

const PasswordField = ({ label, name, value, onChange }) => (
  <div>
    <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor={name}>
      {label}
    </label>
    <input
      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
      id={name}
      name={name}
      type="password"
      placeholder={label}
      style={style}
      value={value}
      onChange={onChange}
    />
  </div>
)

PasswordField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}

export default PasswordField
