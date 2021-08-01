import React from 'react'
import Head from 'next/head'
import Header from '../components/landing-page/Header'
import BlockOne from '../components/landing-page/BlockOne'
import BlockTwo from '../components/landing-page/BlockTwo'

export default function Home() {
  return (
    <div className="container space-y-5">
      <Header />
      <BlockOne />
      <BlockTwo />
      <br />
    </div>
  )
}
