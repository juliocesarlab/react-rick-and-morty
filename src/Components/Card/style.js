import styled from 'styled-components'

export const StyledCard = styled.div`
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



  font-family: 'M PLUS 1 Code', sans-serif;
  box-shadow: hsl(var(--saturated-green)) 0px 20px 30px -10px;

  transition: all 1s;
  transform: perspective(1px) translateZ(0);
  animation: flutuate 2s infinite;

  //animations

  @keyframes flutuate {
  0% {
    -webkit-transform: translateY(-16px);
    transform: translateY(-16px);
  }
  50% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px) ;
  }
  100% {
    -webkit-transform: translateY(-16px);
    transform: translateY(-16px);
  }
  }
  
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
    box-shadow: hsl(var(--saturated-green)) 0px 20px 30px -10px;

    
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

    background: linear-gradient(180deg, rgba(156,234,46,1) 0%, rgba(103,150,37,1) 150%, rgba(67,99,21,1) 200%); 
    
  }
  
`