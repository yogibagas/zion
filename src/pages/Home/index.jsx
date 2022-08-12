import React from "react";
import styled from "styled-components";
import Banner from "../../components/VerticalBanner";

const Index = () => {
  return (
    <div className="flex flex-col">
      <AboutWrapper id="fixed-target" className="about h-screen">
        <Left data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
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
        </Left>

        <Right>
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
        </Right>
      </AboutWrapper>

      <div className="mobile-content py-8 flex md:hidden items-center">
        <div className="heading flex-grow">
        <h1 className="text-center text-5xl font-bold">ZION LABS</h1>
        </div>
      </div>
      <div className="banner">
        <Banner />
      </div>
    </div>
  );
};

export default Index;

const AboutWrapper = styled.section`
  position: relative;
  width: 80vw;
  min-height: 100vh;

  display: flex;
  margin: 0 auto 6rem;

  @media (max-width: 48em) {
    width: 90vw;
  }
  @media (max-width: 30em) {
    width: 100vw;
  }
  @media (max-width: 768px) {
    min-height: 50vh;
    margin: 0;
  }
`;

const Left = styled.div`
  width: 50%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: relative;
  z-index: 5;

  @media (max-width: 64em) {
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    margin: 0 auto;

    padding: 2rem;
    font-weight: 600;

    backdrop-filter: blur(2px);
    border-radius: 20px;
  }
  @media (max-width: 768px) {
    top: 10%;
    left: 35%;
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Right = styled.div`
  width: 50%;
  position: relative;

  img {
    width: 100%;
    height: auto;
  }

  .small-img-1 {
    width: 40%;
    position: absolute;
    right: 87%;
    bottom: 10%;
  }
  .small-img-2 {
    width: 50%;
    position: absolute;
    left: 70%;
    bottom: 30%;
  }

  @media (max-width: 64em) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 100vh;
      object-fit: cover;
    }

    .small-img-1 {
      width: 90%;
      height: auto;
      left: 5%;
      bottom: 10%;
    }
    .small-img-2 {
      width: 50%;
      height: auto;
      left: 10%;
      top: 50%;
    }
  }
`;
