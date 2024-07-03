import React from 'react'
import Header from '../LandingPage/Header/Header';
import Footer from '../LandingPage/Footer/Footer';
import CreateBlog from './BlogMain/CreateBlog';

const LandingPage = () => {
  return (
    <div>
      <Header/>
      <CreateBlog/>
      <Footer/>
    </div>
  )
}

export default LandingPage
