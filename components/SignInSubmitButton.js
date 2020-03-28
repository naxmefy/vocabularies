import React from 'react'

const style = {
  transition: 'all 0.15s ease 0s',
}

// eslint-disable-next-line react/display-name
export default () => (
  <div>
    <button
      className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
      type="button"
      style={style}
    >
      Anmelden
    </button>
  </div>
)
