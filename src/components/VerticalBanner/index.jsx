import React from 'react'
import styled from "styled-components";

import { imageData } from "../../data";
import GalleryItem from "../GalleryItem";

const Index = () => {
    return (
     <BannerWrapper>
       <Container id="up">
  
         <BannerComponent>
           <span data-scroll data-scroll-direction="horizontal" data-scroll-speed="-6" data-scroll-target="#up">
             Go Far Together
           </span>
         </BannerComponent>
  
         <BannerComponent>
           <span data-scroll data-scroll-direction="horizontal" data-scroll-speed="7" data-scroll-target="#up">
              With The Community
           </span>
         </BannerComponent>
  
         <BannerComponent>
           <span data-scroll data-scroll-direction="horizontal" data-scroll-speed="-7" data-scroll-target="#up">
             We Unite Artists
           </span>
         </BannerComponent>
  
         <BannerComponent>
           <span data-scroll data-scroll-direction="horizontal" data-scroll-speed="12" data-scroll-target="#up">
            Into NFT Revolutionary
           </span>
         </BannerComponent>
  
       </Container>
     </BannerWrapper>
    )
  }
  
  export default Index
  
  const BannerWrapper = styled.section`
    min-height: 100vh;
    width: 100%;
    margin: 0 auto;
    background-color:#fafafa;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
    position: relative;
  
    @media (max-width: 48em) {
      width: 90vw;
    }
    @media (max-width:768px){
      min-height:50vh;
      width:100%;
      flex-direction:column;
    }
  `
  
  const Container = styled.div`
    min-height: 100vh;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width:768px){
      min-height:50vh;
    }
  `
  
  const BannerComponent = styled.h2`
    font-size: 8rem;
    color: #000;
    white-space: nowrap;
    text-transform: uppercase;
    line-height: 1;
    font-weight:bold;
  
    @media (max-width: 70em) {
      font-size: 8rem;
    }
    @media (max-width: 64em) {
      margin: 1rem 0;
    }
    @media (max-width: 48em) {
      font-size: 24rem;
      margin: 0.5rem 0;
    }
    @media (max-width: 30em) {
      font-size: 5rem;
    }
    @media screen and (max-width:768px){
      font-size:1.8rem;
    }
    
    span {
      display: block;
      background-color: 15rem;
      padding: 1rem 2rem;
      margin: 0.5rem 0;
    }
  `
  