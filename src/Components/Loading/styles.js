import styled from "styled-components";

export const LoadingCard = styled.div`
  width: 320px;
  height: 400px;
  background: linear-gradient(
    0deg,
    rgba(156, 234, 46, 1) 20%,
    rgba(103, 150, 37, 1) 90%,
    rgba(67, 99, 21, 1) 100%
  );
  background-position: -315px 0, 0 0, 0px 190px, 50px 195px;
  border-radius: 0.5rem;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: show 1s forwards;

  @keyframes show {
    0% {
      transform: translateY(2000px);
      
    }

    100% {
      transform:  translateY(-16px);
    }
  }
`;
