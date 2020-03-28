import React from 'react'

const style = {
  transition: 'all 0.15s ease 0s',
}

// eslint-disable-next-line react/display-name
export default () => (
  <div>
    <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="email">
      E-Mail
    </label>
    <input
      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
      id="email"
      name="email"
      type="email"
      placeholder="E-Mail"
      style={style}
    />
  </div>
)
