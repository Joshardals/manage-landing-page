import React from "react";
import tw from "tailwind-styled-components";
import styled from "styled-components";
import Manage from "./Manage";
import Testimonial from "./Testimonial";

const Body = () => {
  return (
    <Wrapper>
      <Container>
        <Manage />
        <Testimonial />
      </Container>
    </Wrapper>
  );
};
const Wrapper = tw.div`
    space-y-[4rem] lg:space-y-[8rem]
`;
const Container = styled.div`
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: -2rem;
    transform: rotate(180deg);
    left: -35rem;
    background: url("/bg-tablet-pattern.svg");
    height: 100%;
    width: 60%;
  }
`;
export default Body;
