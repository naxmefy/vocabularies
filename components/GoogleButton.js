import React from 'react'

const style = {
  transition: 'all 0.15s ease 0s',
}

const image = 'https://demos.creative-tim.com/tailwindcss-starter-project/static/media/google.87be59a1.svg'

// eslint-disable-next-line react/display-name
export default () => (
  <button
    className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
    type="button"
    style={style}
  >
    <img alt="..." className="w-5 mr-1" src={image} />
    Google
  </button>
)
