import PropTypes from 'prop-types'
import React from 'react'

const style = {
  transition: 'all 0.15s ease 0s',
}

const RememberMeField = ({ value, onChange }) => (
  <div>
    <label className="inline-flex items-center cursor-pointer" htmlFor="rememberMe">
      <input
        type="checkbox"
        className="form-checkbox text-gray-800 ml-1 w-5 h-5"
        id="rememberMe"
        name="rememberMe"
        style={style}
        checked={value}
        onChange={onChange}
      />
      <span className="ml-2 text-sm font-semibold text-gray-700">Angemeldet bleiben?</span>
    </label>
  </div>
)

RememberMeField.propTypes = {
  value: PropTypes.bool,
  onChange: PropTypes.func,
}

export default RememberMeField
