import React from 'react'
import Footer from '../Team/Footer'
import DigitalServices from '../Team/DigitalServices'
import Header from '../Team/Header'
import Selceres from '../Team/Selceres'
import SemiKoli from '../Team/SemiKoli'
import Bubble from '../Team/Bubble'

const HomePageFirst = () => {
    return (
        <>
            <Header />
            <Selceres />
          <SemiKoli/>
          <Bubble/>
            <DigitalServices />
            <Footer backgroundColor="bg-[#1E1E1E]" />
        </>
    )
}

export default HomePageFirst