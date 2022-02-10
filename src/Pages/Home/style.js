import styled from "styled-components";



export const Container = styled.div`

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
      transform: rotate(0deg) translateX(80rem) translateY(0)
    }
  }

  @keyframes show {
    0% {
      transform: rotate(20deg) translateX(999px) translateY(0)
    }

    100% {
      transform: rotate(-8deg) translateX(40rem) translateY(2rem);
    }
  }

  //Start
  height: calc(100vh - 80px);
  
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  

  img#home-gif {
    position: absolute;
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
  }

  .apresentation .search {
    input {
      height: 40px;
      border: 1px solid hsl(var(--saturated-green));
      max-width: 360px;
      outline: none;
      font-size: 1.5rem;
      padding: 1rem;
      color: hsl(var(--saturated-green));
      border-radius: 0.5rem;
      background: 0;
    }
  }
`

export const Card = styled.div`
  width: 320px;
  height: 320px;
  background: rgb(156,234,46);
  background: linear-gradient(0deg, rgba(156,234,46,1) 20%, rgba(103,150,37,1) 90%, rgba(67,99,21,1) 100%); 
  border-radius: 0.5rem;
  padding: 1rem;
  

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  opacity: 0.9;

  font-family: 'M PLUS 1 Code', sans-serif;
  
  .main {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    align-items: center;
    position: relative;
    left: -4rem;
    top: -2rem;
    color: hsl(var(--text-gray));
  }

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: hsl(var(--saturated-green));
    padding: 5px;

    background: linear-gradient(0deg, rgba(156,234,46,1) 20%, rgba(103,150,37,1) 90%, rgba(67,99,21,1) 100%); 
  }
  
  h3 {
    font-size: 2rem ;
    font-family: 'M PLUS 1 Code', sans-serif;
  }

  p{
    text-align: left;
  }

  .description {
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
    gap: 10px;
    color: white;
    background: hsl(var(--saturated-green));
    padding: 0.5rem;
    border-radius: 0.5rem;
    left: 4rem;
    bottom: 1rem;
    position: relative;
    
  }
  
`
