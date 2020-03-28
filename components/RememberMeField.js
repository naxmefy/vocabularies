import React from 'react'

const style = {
  transition: 'all 0.15s ease 0s',
}

// eslint-disable-next-line react/display-name
export default () => (
  <div>
    <label className="inline-flex items-center cursor-pointer" htmlFor="rememberMe">
      <input
        type="checkbox"
        className="form-checkbox text-gray-800 ml-1 w-5 h-5"
        id="rememberMe"
        name="rememberMe"
        style={style}
      />
      <span className="ml-2 text-sm font-semibold text-gray-700">Angemeldet bleiben?</span>
    </label>
  </div>
)
