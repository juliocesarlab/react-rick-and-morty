import styled from "styled-components";



export const HomeContainer = styled.div`

  //Animations
  @keyframes gifMove {
    0% {
      transform: rotate(0deg) translateX(80rem);
    }

    100% {
      transform: rotate(-8deg) translateX(40rem) translateY(2rem);
    }
  }

  @keyframes hide {
    0% {
      transform: rotate(-8deg) translateX(40rem);
      
    }

    100% {
      transform: rotate(0deg) translateX(80rem) translateY(0);
      
    }
  }

  @keyframes show {
    0% {
      transform: rotate(20deg) translateX(999px) translateY(0);
      
    }

    100% {
      transform: rotate(-8deg) translateX(40rem) translateY(2rem);
    }
  }

  

  //Start
  height: calc(100vh - 80px);
  
  width: 100%;
  max-width: 1100px;
  margin: 0rem auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  
  
  @media(max-width: 786px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

  
  }
  
  .gif-wrapper {
    position: absolute;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    padding: 10rem;
    
    inset: 0;
    z-index: -1;
  }

  img#home-gif {
    
    transition: all 2s;
    animation: gifMove 1s forwards;

  
    &.hide {
      animation: hide 1s forwards;
    }
    &.show {
      animation: show 1s forwards;
      animation: gifMove 1s forwards;
    }
  }

  .apresentation {
    display: flex;
    flex-direction: column;
    
    height: 80%;
    flex: 1;

  }

  .apresentation .text {
    color: hsl(var(--saturated-green));
    margin-bottom: 4rem;
    h1 {
    font-size: 4rem;
    }

    p{
      font-size: 1.5rem;
    }

    @media(max-width: 786px) {
      margin-bottom: 2rem;
      h1 {
        font-size: 3rem;
      }
    }
  }

  .apresentation .search {
    input {
      height: 40px;
      border: 0;
      border-bottom: 1px solid hsl(var(--saturated-green));
      max-width: 360px;
      width: 100%;
      outline: none;
      font-size: 1.5rem;
      padding: 1rem;
      //color: hsl(var(--saturated-green));
      color: #fff;
      background: 0;
    }
  }

  
`
