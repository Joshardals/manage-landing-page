import React from "react";
import tw from "tailwind-styled-components";
import styled from "styled-components";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <Wrapper>
      <Navbar />
        <HeaderContainer>
          <HeaderText>
            <h1>Bring everyone together to build better products.</h1>
            <p>
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <ButtonContainer>
              <GetStarted>Get Started</GetStarted>
            </ButtonContainer>
          </HeaderText>

          <HeroImg src="/illustration-intro.svg" />
        </HeaderContainer
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  z-index: 1;

  &:before {
    content: "";
    position: absolute;
    top: -10rem;
    right: -12rem;
    background: url("/bg-tablet-pattern.svg");
    height: 100%;
    width: 60%;
    z-index: -1;

    @media (max-width: 375px) {
      top: -2rem;
      right: -5rem;
      width: 100%;
      height: 47%;
      background-size: contain;
    }
    @media (min-width: 375px) and (max-width: 768px) {
      top: -5rem;
      right: -20rem;
      height: 50%;
      width: 100%;
      background-size: contain;
    }
  }
`;
const HeaderContainer = tw.div`
  flex justify-between lg:flex-row  lg:py-10
  items-center lg:px-10 xl:px-[10rem] lg:space-x-[5rem]
  lg:text-left

  flex-col text-center

`;
const HeaderText = tw.div`
    w-[20rem] lg:w-[20rem] space-y-5 order-1 lg:order-none
    px-5 lg:px-0  py-8
`;
const ButtonContainer = tw.div`
  flex items-center justify-center lg:items-start 
  lg:justify-start
`;
const GetStarted = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  color: #fff;
  border-radius: 999px;
  background: hsl(12, 88%, 59%);
  padding: 0.75rem 1.75rem 0.75rem 1.75rem;
  box-shadow: 1px 6px 4px 0px rgb(242, 95, 58, 0.4);
  font-weight: 600;
  transition: all 0.3s ease-in 2ms;

  &:hover {
    background: #fff;
    color: hsl(12, 88%, 59%);
  }

  @media (max-width: 768px) {
    margin-top: 1.5rem;
  }
`;
const HeroImg = tw.img`
  px-5 lg:px-0 lg:p-0 
`;
export default Header;
