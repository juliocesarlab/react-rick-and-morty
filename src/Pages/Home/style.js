import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 80px);
  
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @keyframes gifMove {
    0% {
      transform: rotate(0deg);
    }

    50% {
      transform: rotate(-30deg) translateX(-5rem) translateY(-5rem);
    }

    100% {
      transform: rotate(0deg) translateX(0) translateY(0);
    }
  }

  img {
    animation: gifMove 10s infinite;
  }

  img.hide {
    display: none;
  }

  img.show {
    display: block;
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
      width: 50%;
      outline: none;
      font-size: 1.5rem;
      padding: 1rem;
      color: hsl(var(--saturated-green));
      border-radius: 0.5rem;
      background: 0;
    }
  }

`
