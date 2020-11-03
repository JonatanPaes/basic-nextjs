/* eslint-disable no-use-before-define */
import React from 'react'

import Head from 'next/head'

import ImageSvgInstagram from '../assets/instagram.svg'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Home Page</title>
      </Head>
      <ImageSvgInstagram />
      <h1>Projeto Base NextJs</h1>
      <p>Feito por Juju</p>
    </Container>
  )
}

export default Home
