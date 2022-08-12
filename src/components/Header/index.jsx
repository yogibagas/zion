import React from 'react'
import HamburgNav from "./../HamburgNav";

const Index = () => {
  return (
    <div className="header py-4 ">
    <div className='flex w-full container items-center justify-between mx-auto'>

    <div className="hamburgNav z-50" >
            <HamburgNav/>
        </div>
        <div className="connect-to-wallet bg-zion-blue bg-opacity-50 backdrop-blur-xl drop-shadow-lg text-white px-4 py-2 rounded">
            <button className="font-bold ">Connect to Wallet</button>
        </div>
    </div>
    </div>
  )
}

export default Index