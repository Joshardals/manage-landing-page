import { useState } from "react";
import tw from "tailwind-styled-components";
import styled from "styled-components";

const Navbar = () => {
  const [isOpened, setIsOpened] = useState(false);
  const handleNav = () => {
    setIsOpened(!isOpened);
  };
  const handleCloseNav = () => {
    if (isOpened == true) {
      setIsOpened(false);
    } else {
      null;
    }
  };

  return (
    <Wrapper onClick={handleCloseNav}>
      {isOpened ? <BgCover></BgCover> : null}
      <LogoImg src="/logo.svg" alt="Logo Img" />
      <NavContainer>
        <NavLink href="#">Pricing</NavLink>
        <NavLink href="#">Product</NavLink>
        <NavLink href="#">About Us</NavLink>
        <NavLink href="#">Careers</NavLink>
        <NavLink href="#">Community</NavLink>
      </NavContainer>
      <GetStarted>Get Started</GetStarted>
      <NavToggler onClick={handleNav}>
        {isOpened ? (
          <Close src="/icon-close.svg" alt="Nav Close" />
        ) : (
          <Hamburger src="/icon-hamburger.svg" alt="Nav Open" />
        )}
      </NavToggler>
      {isOpened ? (
        <NavMenu>
          <NavMobileLink href="#">Pricing</NavMobileLink>
          <NavMobileLink href="#">Product</NavMobileLink>
          <NavMobileLink href="#">About Us</NavMobileLink>
          <NavMobileLink href="#">Careers</NavMobileLink>
          <NavMobileLink href="#">Community</NavMobileLink>
        </NavMenu>
      ) : null}
    </Wrapper>
  );
};
const Wrapper = tw.div`
    flex justify-between py-10 lg:px-10 xl:px-[10rem] 
    items-start lg:items-center
    px-6  
`;
const BgCover = tw.div`
  h-full w-full bg-gray-500 absolute top-0 left-0
  opacity-30 lg:hidden block
`;
const LogoImg = tw.img`
  z-[10] lg:z-0
`;
const NavContainer = tw.div`
    hidden lg:block
`;
const NavLink = tw.a`
    mx-4 transition-all hover:text-bright-red
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

  @media (max-width: 1023px) {
    display: none;
  }
`;
const NavToggler = tw.div`
    lg:hidden z-[10] lg:z-0
`;
const Hamburger = tw.img`
`;
const Close = tw.img``;

const NavMenu = tw.div`
  h-auto w-auto  mt-4 p-6 absolute top-20 left-0 right-0
  bg-white z-10 mx-6 lg:hidden block shadow-lg
`;
const NavMobileLink = tw.a`
  flex items-center justify-center my-5
  transition-all hover:text-bright-red
`;
export default Navbar;
