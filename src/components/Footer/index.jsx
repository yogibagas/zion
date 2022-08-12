import React, { useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import { imageData } from "../../data";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import ZLPButton from "../Button";
import SlickItem from "./../SliderItem";

import "./footer.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Product = ({ name = "", id = "", images, dna }) => {
  return (
    <Item
      initial={{ filter: "grayscale(100%)" }}
      whileInView={{ filter: "grayscale(0%)" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: "all" }}
    >
      <div className="box bg-gradient-to-b from-zion-blue to-zion-lightblue text-white flex flex-col backdrop-blur-md rounded drop-shadow-lg">
        <div className="desc px-4 flex flex-col py-2 border border-gray-200 bg-gray-100 backdrop-blur-md rounded drop-shadow-lg">
          <h3 className="text-black font-bold">
            {name} - {dna ? `#${dna}` : "No DNA Found"}
          </h3>
        </div>
        <img src={images} alt={name} className="w-full" />
      </div>
    </Item>
  );
};
const Index = () => {
  const [wallet, setWallet] = useState(false);

  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const horizontalRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current; //
    let scrollingElement = horizontalRef.current; //

    let pinWrapWidth = scrollingElement.offsetWidth; //

    let tl = gsap.timeline();

    setTimeout(() => {
      ScrollTrigger.matchMedia({
        // desktop
        "(min-width: 800px)": function () {
          // setup animations and ScrollTriggers for screens over 800px wide (desktop) here...
          // ScrollTriggers will be reverted/killed when the media query doesn't match anymore.

          tl.to(element, {
            immediateRender: false,
            scrollTrigger: {
              trigger: element,
              start: "top top",
              end: pinWrapWidth,
              scroller: ".App", // locomotive element
              scrub: true,
              pin: true,
              // markers: true
            },
            height: `${scrollingElement.scrollWidth}px`,
            ease: "none,",
          });

          // horizontal scrolling
          tl.to(scrollingElement, {
            immediateRender: false,
            scrollTrigger: {
              trigger: scrollingElement,
              start: "top top",
              end: pinWrapWidth,
              scroller: ".App", // locomotive element
              scrub: true,
              // markers: true
            },
            x: -pinWrapWidth,
            ease: "none,",
          });
          ScrollTrigger.refresh();
        },

        // mobile
        "(max-width: 799px)": function () {
          // Any ScrollTriggers created inside these functions are segregated and get
          // reverted/killed when the media query doesn't match anymore.
        },
      });
    }, 1000);

    return () => {
      const t = ScrollTrigger.getAll();
      console.log("TRIGGERS 2", t.length);
      t.forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="content bg-zion-blue pb-16 md:pb-0" ref={ref}>
      <div className="left-wrapper bg-black text-white w-full xl:w-1/4 md:min-h-[100vh] 2xl:min-h-[100vh] flex flex-col items-center py-[90px] px-8 left-0 md:z-0 2xl:z-0">
        <div className="left-content">
          <h2 className="text-5xl font-bold" data-scroll data-scroll-speed>
            <span>
              Zion Launchpad
              <br></br>
              <em className=" text-blue-300">Alliance</em>
            </span>
          </h2>
          <p className="mt-8">
            Zion Labs is a decentralized platform that enables the creation of
            music community to grow together with blockchain ecosystem.
          </p>

          <ZLPButton
            text="Discover Launchpad"
            type="link"
            link="https://www.zionlp.com/launchpad-artists"
            target="_blank"
            className="mt-8"
          />
        </div>
      </div>
      <div className="right-wrapper pt-[90px] w-full md:w-3/4 md:z-0 2xl:z-10">
        <div className="right-card relative text-white w-full mx-auto">
          <div className="right-card-content px-16 flex flex-col md:flex-row gap-10">
            <div className="box border border-white px-8 flex flex-col py-6 max-w-lg">
              <h2 className="text-2xl font-bold text-center">
                ZionLabs Staking
              </h2>
              {!wallet && (
                <div className="connect flex flex-col">
                  <em>Please Connect Wallet to Unlock</em>
                  <button
                    onClick={() => setWallet(!wallet)}
                    className={"text-left font-bold"}
                  >
                    Connect
                  </button>
                </div>
              )}
              {wallet && (
                <div className="item flex flex-col text-left space-y-2">
                  <div className="row mt-4">
                    <h3 className="text-md font-bold">Zion TO HARVEST</h3>
                    <p>0.000</p>
                    <p class="text-sm">~$0.00</p>
                  </div>
                  <div className="row">
                    <h3 className="text-md font-bold">Zion In Wallet</h3>
                    <p>0.000</p>
                    <p class="text-sm">~$0.00</p>
                  </div>
                  <div className="row">
                    <button className="border mt-4 border-zion-lightblue hover:bg-black hover:bg-opacity-50 hover:border-zion-blue transform duration-200 px-4 py-2 w-full">
                      Harvest All
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="box border border-white px-8 flex flex-col  py-6 max-w-lg">
              <h2 className="text-2xl font-bold  text-center">
                ZionLabs Stats
              </h2>
              {!wallet && (
                <div className="connect flex flex-col">
                  <em>Please Connect Wallet to Unlock</em>
                  <b>Connect</b>
                </div>
              )}
              {wallet && (
                <div className="item flex flex-col text-left space-y-2 justify-between">
                  <div className="row flex flex-row mt-4 content-between justify-between">
                    <h3 className="text-md font-bold">
                      3,447.510 Total Supply
                    </h3>
                  </div>
                  <div className="row flex flex-row mt-4 content-between">
                    <h3 className="text-md font-bold">
                      3,414,714 Circulating RASTA Supply
                    </h3>
                  </div>
                  <div className="row flex flex-row mt-4 content-between">
                    <h3 className="text-md font-bold">
                      222.420 Total RASTA Burned
                    </h3>
                  </div>
                  <div className="row flex flex-row mt-4 content-between">
                    <h3 className="text-md font-bold">0.1 New RASTA/block</h3>
                  </div>
                </div>
              )}
            </div>

            <div className="box border border-white px-8 flex flex-col py-6 max-w-lg">
              <h2 className="text-2xl font-bold text-center">ZionLabs TVL</h2>
              {!wallet && (
                <div className="connect flex flex-col">
                  <em>Please Connect Wallet to Unlock</em>
                  <b>Connect</b>
                </div>
              )}

              {wallet && (
                <div className="row flex flex-col mt-4 content-between text-center">
                  <h3 className="text-3xl font-bold ">$196,839.32</h3>
                  <p>Across all LPs and Rasta Pools</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div
          className="right absolute px-16 py-8 hidden md:block xl:left-84 2xl:left-72 justify-start items-center bg-zion-blue md:bottom-[10px] backdrop-blur-md  drop-shadow-lg"
          ref={horizontalRef}
        >
          <div className="nft flex justify-start">
            {imageData.map((item) => {
              return (
                <Product
                  name={item.name}
                  dna={item.dna}
                  images={item.image}
                  key={item.id}
                />
              );
            })}
          </div>
          <div className="button absolute -right-20 bottom-[9rem]">
            <button className=" rotate-90 w-full font-bold text-white mx-auto border  text-center py-3 px-8 border-white  hover:bg-zion-lightblue hover:bg-opacity-50">
              Discover Our NFT Projects
            </button>
          </div>
        </div>
      </div>
      <div className="mobile-gallery block md:hidden mt-8 space-x-4">
        <SlickItem items={imageData}></SlickItem>
      </div>
    </div>
  );
};

export default Index;

const ShopWrapper = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  position: relative;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  color: ${(props) => props.theme.text};
  font-weight: 300;
  text-shadow: 1px 1px 1px ${(props) => props.theme.grey};

  position: absolute;
  top: 0;
  left: 5%;
  z-index: 11;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
    top: -20px;
  }
`;

const Left = styled.div`
  width: 35%;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.text};

  min-height: 100vh;
  z-index: 5;

  poisition: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
  }

  @media (max-width: 64em) {
    p {
      font-size: ${(props) => props.theme.fontmd};
    }
  }
  @media (max-width: 48em) {
    width: 40%;
    p {
      font-size: ${(props) => props.theme.fontsm};
    }
  }
  @media (max-width: 30em) {
    p {
      font-size: ${(props) => props.theme.fontxs};
    }
  }
`;

const Right = styled.div`
  position: absolute;
  left: 35%;
  padding-left: 30%;
  min-height: 100vh;
  //width: 65%;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  background-color: ${(props) => props.theme.grey};

  h2 {
    width: 5rem;
    margin: 0 2rem;
  }
`;

const Item = styled(motion.div)`
  width: 15rem;
  margin-right: 6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    height: auto;
    cursor: pointer;
  }

  h2 {
    display: inline-block;
    width: fit-content;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
  }

  @media (max-width: 48em) {
    width: 12rem;
  }
`;
