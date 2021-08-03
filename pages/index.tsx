import React from 'react'
import Head from 'next/head'
import Header from '../components/landing-page/Header'
import BlockOne from '../components/landing-page/BlockOne'
import BlockTwo from '../components/landing-page/BlockTwo'
import BlockThree from '../components/landing-page/BlockThree'
import BlockFour from '../components/landing-page/BlockFour'
import BlockFive from '../components/landing-page/BlockFive'
import { FaGithub } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="container space-y-10">
      <Head>
        <title>Home page | Wit</title>
        <meta name="description" content="Home page test thu cho vui" />
      </Head>
      <Header />
      <BlockOne />
      <BlockTwo />
      <BlockThree />
      <BlockFour />
      <BlockFive />
      <div className="flex justify-center py-10">
          <a target="_blank" rel="noreferrer" href="https://github.com/tjennt">
              <FaGithub size={40} />
          </a>
      </div>
    </div>
  )
}
