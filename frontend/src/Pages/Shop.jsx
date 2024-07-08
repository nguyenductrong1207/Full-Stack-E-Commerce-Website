import React from 'react'
import Slider from '../Components/Slider/Slider'
import Offer from '../Components/Offer/Offer'
import NewCollection from '../Components/NewCollection/NewCollection'
import Popular from '../Components/Popular/Popular'

const Shop = () => {
  return (
    <div>
      <Slider/>
      <NewCollection/>
      <Offer/>
    </div>
  )
}

export default Shop
