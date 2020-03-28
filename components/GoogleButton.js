import { FaGoogle } from 'react-icons/fa'
import React from 'react'

const style = {
  transition: 'all 0.15s ease 0s',
}

// eslint-disable-next-line react/display-name
export default () => (
  <button
    className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
    type="button"
    style={style}
  >
    <span className="pr-2 text-lg">
      <FaGoogle />
    </span>
    Google
  </button>
)
