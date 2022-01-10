import React from "react";
import styled from "styled-components";
import tw from "tailwind-styled-components";

const Simplify = () => {
  return (
    <Wrapper>
      <Text>Simplify how your team works today.</Text>
      <GetStarted>Get Started</GetStarted>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  height: 15rem;
  background-color: hsl(12, 88%, 59%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  @media (max-width: 1023px) {
    flex-direction: column;
    justify-content: center;
    height: 20rem;
  }

  &:before {
    content: "";
    position: absolute;
    left: -3rem;
    right: 0;
    top: 0;
    background: url("/bg-tablet-pattern.svg");
    height: 100%;
    width: 60%;
    opacity: 0.1;
    z-index: 10;
    @media (min-width: 375px) and (max-width: 425px) {
      top: 2rem;
      left: -10rem;
      height: 100%;
      width: 85%;
      background-size: contain;
    }
  }

  &:after {
    content: "";
    position: absolute;
    right: -40rem;
    top: -5rem;
    background: url("/bg-tablet-pattern.svg");
    height: 100%;
    width: 60%;
    opacity: 0.1;
    z-index: 10;
    transform: rotate(180deg);
  }

  @media (max-width: 1023px) {
    padding: 0 1.5rem 0 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 0 10rem 0 10rem;
  }
`;
const Text = tw.div`
  text-[2rem] text-white font-bold
  lg:w-[35rem] z-10 text-center lg:text-left
  mb-6 lg:mb-0 w-[17rem]
`;
const GetStarted = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 999px;
  color: hsl(12, 88%, 59%);
  padding: 0.75rem 1.75rem 0.75rem 1.75rem;
  box-shadow: 1px 6px 4px 0px rgb(242, 95, 58, 0.4);
  width: 10rem;
  font-weight: 600;
`;
export default Simplify;
