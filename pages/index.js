import AppNavLayout from '../components/AppNavLayout'
import React from 'react'
import { withTranslation } from '../i18n'

const Home = () => (
  <AppNavLayout>
    <div className="p-12">
      <div className="p-4 shadow rounded bg-white">
        <h1 className="text-purple-500 leading-normal">Vocabularies</h1>
        <p className="text-gray-500">Just a tool to learn</p>
      </div>
    </div>
  </AppNavLayout>
)

export default withTranslation('common')(Home)
