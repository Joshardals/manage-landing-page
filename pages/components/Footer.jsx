import React from "react";
import tw from "tailwind-styled-components";
import Simplify from "./Simplify";

const Footer = () => {
  return (
    <Wrapper>
      <Simplify />
      <FooterContainer>
        <FirstContainer>
          <LogoCont>
            <LogoImg src="/logo.svg" alt="Logo Img" />
            <SocialContainer>
              <SocialLink>
                <SocialImg src="icon-facebook.svg" />
              </SocialLink>
              <SocialLink>
                <SocialImg src="icon-youtube.svg" />
              </SocialLink>
              <SocialLink>
                <SocialImg src="icon-twitter.svg" />
              </SocialLink>
              <SocialLink>
                <SocialImg src="icon-pinterest.svg" />
              </SocialLink>
              <SocialLink>
                <SocialImg src="icon-instagram.svg" />
              </SocialLink>
            </SocialContainer>
          </LogoCont>
        </FirstContainer>
        <SecondContainer>
          <NavContainer>
            <NavLink href="#">Home</NavLink>
            <NavLink href="#">Pricing</NavLink>
            <NavLink href="#">Products</NavLink>
            <NavLink href="#">About Us</NavLink>
          </NavContainer>

          <NavContainer>
            <NavLink href="#">Careers</NavLink>
            <NavLink href="#">Community</NavLink>
            <NavLink href="#">Privacy Policy</NavLink>
          </NavContainer>
        </SecondContainer>
        <ThirdContainer>
          <PartTwo>
            <InboxContainer>
              <TextField
                type="text"
                placeholder="Updates in your inbox"
              ></TextField>
              <Submit>Go</Submit>
            </InboxContainer>
          </PartTwo>
        </ThirdContainer>
        <FourthContainer>
          <Copyright>Copyright 2020. All Rights Reserved</Copyright>
          <Author>
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
              className="author"
            >
              Frontend Mentor
            </a>
            <br />
            Coded by{" "}
            <a
              className="author"
              href="https://www.frontendmentor.io/profile/Joshardals"
            >
              Joshua Bamidele
            </a>
          </Author>
        </FourthContainer>
      </FooterContainer>
    </Wrapper>
  );
};
const Wrapper = tw.div`
`;
const FooterContainer = tw.div`
    h-auto bg-very-dark-blue w-full lg:px-[10rem]
    px-6 flex py-14 lg:space-x-[5rem] lg:flex-row flex-col
    justify-center items-center lg:items-start lg:relative 
    right-0 left-0
`;
const FirstContainer = tw.div`
  flex  order-3 lg:order-none mt-[3rem] lg:mt-0
`;
const LogoCont = tw.div`
  flex flex-col lg:space-y-[8rem]
`;
const LogoImg = tw.img`
  order-1 lg:order-none mb-[3rem] lg:mb-0
`;
const SocialContainer = tw.div`
  flex mb-[3rem] lg:mb-0
`;
const SocialLink = tw.a`
  px-2
`;
const SocialImg = tw.img``;
const NavContainer = tw.div`
  flex flex-col 
`;
const NavLink = tw.a`
  py-2 text-dark-grayish-blue font-normal hover:text-white transition-all
`;
const SecondContainer = tw.div`
  flex flex-1 justify-between px-14 w-full order-1 lg:order-none
`;
const InboxContainer = tw.form`
  flex items-start space-x-2 justify-center w-full 
`;
const TextField = tw.input`
  rounded-full py-3 px-6 text-sm outline-none flex-1 lg:flex-0
`;
const Submit = tw.div`
  bg-bright-red rounded-full text-center px-6 py-3 text-white w-[5rem] lg:w-auto
`;
const ThirdContainer = tw.div`
  w-full lg:w-auto mb-[3rem] lg:mb-0
`;
const PartTwo = tw.div`
  flex flex-col lg:space-y-[8rem]
`;
const FourthContainer = tw.div`
  text-center lg:text-right text-sm order-4 lg:order-none text-white
  space-y-2 lg:absolute lg:bottom-14 lg:right-[10rem]
`;
const Author = tw.div`
`;
const Copyright = tw.div`
`;
export default Footer;
