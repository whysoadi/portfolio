import Head from 'next/head';
import React from 'react';
import Navbar from "../components/Navbar"
import  Main from "../components/Main"
import About from "../components/About"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Contact from "../components/Contact"

 function Home() {
  return (
    <div>
      <Head>
        <title>Aditya Yadav</title>
        <meta name="description" content="generative" />
        <link rel="icon" href="/ay1.png" />
      </Head>
      <Navbar />
      <Main/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default Home
