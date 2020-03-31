import Link from 'next/link'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ withNav }) => {
  const [menuOpen, setMenuOpen] = React.useState(false)

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="/">
          <a>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAEa0lEQVRIie2VW2xUVRSGv33OnDNDL0BpKTZchRZE0QfbgEgNEi6BoI0XKJQgahSiRInGKA9IovZFUxJIUNKYGAlpQCkSFWJiDXIXMcGgUXmoCIgOCsV2pqXTOefsvXygtNPSmWJDfOJ/OmvtvdZ31r6sDbf0P0n1dox6UWaKsAzF+JsBEKiJblYNvf2hVKN4tTzj2FTbNiQ6OKvgHTH8MRCggVWWotVRnIj2Md5V8YNvSKj5Ik0LZ8NnDcQRyoEtApPTJbdswpZFuAtm8I0m0WnmCbx16n21qa/Yropbo4wtyEKHY5xxA84izBWLK9qhLB3Y1VyYu6gbfHQvLfE4jxiXxpDHWiXpIlPAHc2cDwxOicOYQYYhGNaK5iUC/kkXbNt0TDLd9g8GE2iOd9UML/cL/rleeXNXSM2eY6wc6ZLT3M4GT7HC+JxNFzzIITq+o9vO9SDpMc2DRtdirSgGlS+TvGvjRT7x+nqle4ABvtqmqudXyRlgeQjuDsE+IA/QgA1cgO56HA2FcfiykeCBcYRyNMSFXS746KtzwvAsMAKIt1vMBk5BH9fpmuY9Idk5hl+KppJz4TiBNiwK+VzSFtkADpyUEM1hGzzDDluxRAtO0lCCosAKcFLSbcDmzU8/UgeuW+reykswq2AcueEWfnKSHHWEUhTPhwy/AxiLR+0OykSRrN+tzlVVyTrbY/Tnn6jo0sdlo8CwlHR39T5oacERn2GFDm4yRhAJuIgwGYsGZTjUOWXBtblPVchUrnR9F+OzKzWXWLzae2nTgh3D4aZGvBn3M/FyI08KVIhmtYI56WLSyme41Yt83R6/8rAUBJp5RhgNVDo2owUi2vCnCLuB+H/lKlgBHPE062sb1EXoVfFrc+Q+PLbbEbJIEsHwIYa/gB4n5YZgwhyBDhRHgG0Absp4D3DYsNVaTMLsYbgkKQMqlEVxPwxLssnp4WmnVRnygLrqr/tpmW+XyxhtI0Md7owZDoumVCnmG0NtRqzLGn8K5cGYzoRnwPmefZbmN5P2sqaAs3xafIvcEWC8gEId0IjFJGBVRnCS4tvzIXfsVTMeg7+T3CGGpAjf9Atec1zFN0+XQ4kGioZEmGosKvwY08RwWyauHaF6fCsLWvaSsG1U/lAibYrvAs2lTHE9FuODGZKrfTYpQyWKHKAF0j8SoqhxHQoDzeshm21i4RqfpSjWGU02wgtArPsveWjltyp9y9y5WOzkafYkRzI4FONeFFtVC5tCpmcVXj6JcwfwJpYybNkJ1QSwvVQKqk5wuX46Eb+NCIAJUSeK2sgEvqjsfCT6BO+aIvfoLHbEljN58McctNpYD+wEijItXyYpxazFJ/vp1a5QYvJpKoiC28Z+o6lUwhZl8d5AoEaou6GWGTH8qM4zyp1FkAzxmHgsV0ItmqcHAgZGKKhJdaS9aQdLZKPKZqYSJiLsl3beVULTQKhisUEUO7LbqCuLqvaMYIBjE2SJgoXIwPc2VdriuRm/qtM3I9ct3bD+BSMxt4AaD/VsAAAAAElFTkSuQmCC" />
          </a>
        </Link>
        <Link href="/">
          <a>
            <span className="font-semibold text-xl tracking-tight pl-2">Vocabularies</span>
          </a>
        </Link>
      </div>
      <div className={'block md:hidden' + (withNav ? '' : ' hidden')}>
        <button
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={
          'w-full flex-grow md:items-center md:w-auto' +
          (menuOpen ? ' block' : ' hidden') +
          (withNav ? ' md:flex' : ' hidden')
        }
      >
        <div className="text-sm md:flex-grow">
          <a
            href="#responsive-header"
            className="block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Docs
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Explore
          </a>
          <a href="#responsive-header" className="block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white">
            Blog
          </a>
        </div>
        <div>
          <Link href="/sign-in">
            <a className="inline-block text-sm px-4 py-2 mr-2 leading-none border-0 rounded text-white border-white hover:border-transparent hover:text-gray-900 hover:bg-white mt-4 md:mt-0">
              Sign In
            </a>
          </Link>
          <Link href="/sign-up">
            <a className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-900 hover:bg-white mt-4 md:mt-0">
              Sign Up
            </a>
          </Link>
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {
  withNav: PropTypes.bool,
}

export default Header
