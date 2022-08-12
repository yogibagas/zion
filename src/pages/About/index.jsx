import React from 'react'
import Banner from "../../components/VerticalBanner";

function Index() {
  return (
    
    <div className="flex flex-col">
      <div id="fixed-target" className="about h-screen">
        <div data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
          <div
            className="behind-text fill hidden md:block"
            data-scroll
            data-scroll-speed
          >
            Zion Labs. Completely Decentralized
          </div>
          <div
            className="behind-text outline-text hidden md:block "
            data-scroll
            data-scroll-speed
          >
            Zion Labs. Completely Decentralized
          </div>
          <div />
        </div>

        <div>
          <img src={"/nft-images/1.jpg"} alt="A propos" />
          <img
            src={"/nft-images/lion-trans.png"}
            className="small-img-1"
            alt="A propos"
            data-scroll
            data-scroll-speed="5"
          />
          <img
            src={"/nft-images/zion-trans-scaled.png"}
            className="small-img-2"
            alt="A propos"
            data-scroll
            data-scroll-speed="-2"
          />
        </div>
      </div>

      <div className="mobile-content py-8 flex md:hidden items-center">
        <div className="heading flex-grow">
        <h1 className="text-center text-5xl font-bold">ZION LABS</h1>
        </div>
      </div>
      <div className="banner">
        <Banner />
      </div>
    </div>
  )
}

export default Index