import React from 'react'

// eslint-disable-next-line react/display-name
export default () => (
  <footer className="absolute w-full bottom-0 pb-6">
    <div className="container mx-auto px-4">
      <hr className="mb-6 border-b-1 border-gray-700" />
      <div className="flex flex-wrap items-center md:justify-between justify-center">
        <div className="w-full md:w-4/12 px-4">
          <div className="text-sm text-white font-semibold py-1">
            &copy; 2020{' '}
            <a
              href="https://github.com/naxmefy"
              className="text-white hover:text-gray-400 text-sm font-semibold py-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              naxmefy{' '}
            </a>
          </div>
        </div>
        <div className="w-full md:w-8/12 px-4">
          <ul className="flex flex-wrap list-none md:justify-end  justify-center">
            <li>
              <a href="/about" className="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3">
                Über uns
              </a>
            </li>
            <li>
              <a
                href="https://nax.me"
                className="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="https://github.com/naxmefy/vocabularies/LICENSE"
                className="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                MIT Lizenz
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
)
