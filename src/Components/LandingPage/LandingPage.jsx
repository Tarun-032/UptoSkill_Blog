import React from 'react'
import Header from '../LandingPage/Header/Header';
import MainContent from '../LandingPage/MainContent/MainContent';
import CardSection from './Cards/CardSection';
import Footer from '../LandingPage/Footer/Footer';


const LandingPage = () => {
  return (
    <div>
      <Header/>
      <MainContent/>
      <CardSection/>
      <Footer/>
    </div>
  )
}

export default LandingPage
