import React from "react";
import tw from "tailwind-styled-components";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";
const Manage = () => {
  return (
    <Wrapper>
      <Slide left>
        <LeftContainer>
          <h1>What's different about Manage?</h1>
          <LeftText>
            <p>
              Manage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital product
              teams.
            </p>
          </LeftText>
        </LeftContainer>
      </Slide>
      <Features>
        <Zoom right>
          <FeatureContainer>
            <FeatureHeader>
              <Number>01</Number>
              <Title>Track company-wide progress</Title>
            </FeatureHeader>
            <FeatureText>
              <p>
                See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone level all the way done to the
                smallest of details. Never lose sight of the bigger picture
                again.
              </p>
            </FeatureText>
          </FeatureContainer>
        </Zoom>
        <Zoom left>
          <FeatureContainer>
            <FeatureHeader>
              <Number>02</Number>
              <Title>Advanced built-in reports</Title>
            </FeatureHeader>
            <FeatureText>
              <p>
                Set internal delivery estimates and track progress toward
                company goals. Our customisable dashboard helps you build out
                the reports you need to keep key stakeholders informed.
              </p>
            </FeatureText>
          </FeatureContainer>
        </Zoom>
        <Zoom right>
          <FeatureContainer>
            <FeatureHeader>
              <Number>03</Number>
              <Title>Everything you need in one place</Title>
            </FeatureHeader>
            <FeatureText>
              <p>
                Stop jumping from one service to another to communicate, store
                files, track tasks and share documents. Manage offers and
                all-in-one team productivity solution.
              </p>
            </FeatureText>
          </FeatureContainer>
        </Zoom>
      </Features>
    </Wrapper>
  );
};

const Wrapper = tw.div`
    flex lg:flex-row flex-col px-0 lg:justify-between 
    space-y-10 lg:space-y-0  mb-[4rem] lg:mb-[8rem]
    mx-6 lg:px-10 xl:px-[10rem] z-10 relative 
    `;
const LeftContainer = tw.div`
    lg:w-[30rem] space-y-4 px-4 lg:px-0 text-center lg:text-left
`;
const LeftText = tw.div`
    lg:w-[20rem]
`;
const Features = tw.div`
    space-y-9
`;
const FeatureContainer = tw.div`
    space-y-6 lg:space-y-0
`;
const FeatureHeader = tw.div`
    flex space-x-4 items-center bg-very-pale-red lg:bg-transparent
`;
const Number = tw.div`
    px-6 py-2 lg:px-8 lg:py-3 bg-bright-red rounded-full
    text-white font-semibold
`;
const Title = tw.h3`
    text-dark-blue text-[0.9rem] lg:text-base
`;
const FeatureText = tw.div`
    lg:w-[25rem] lg:ml-[6.2rem]
`;
export default Manage;
