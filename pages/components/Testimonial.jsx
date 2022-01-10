import React from "react";
import styled from "styled-components";
import tw from "tailwind-styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonial = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    responsive: [
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          dots: true,
          fade: true,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: false,
          infinite: true,
        },
      },
    ],
  };

  return (
    <Wrapper>
      <h1>What they've said</h1>
      <Carousel {...settings}>
        <Wrap>
          <ProfileImg src="avatar-anisha.png" />
          <ProfileName>Anisha Li</ProfileName>
          <p>
            "Manage has supercharged our team's workflow. The ability to
            maintain visibility on larger milestones at all times keeps everyone
            motivated."
          </p>
        </Wrap>
        <Wrap>
          <ProfileImg src="avatar-ali.png" />
          <ProfileName>Ali Bravo</ProfileName>
          <p>
            "We have been able to cancel so many other subscriptions since using
            Manage. There is no more cross-channel confusion and everyone is
            more focused."
          </p>
        </Wrap>
        <Wrap>
          <ProfileImg src="avatar-richard.png" />
          <ProfileName>Richard Watts</ProfileName>
          <p>
            "Manage allows us to provide structure and process. It keeps us
            organized and focused. I can't stop recommendig them to everyone I
            talk to!"
          </p>
        </Wrap>
        <Wrap>
          <ProfileImg src="avatar-shanai.png" />
          <ProfileName>Shanai Gough</ProfileName>
          <p>
            "Their software allows us to track, manage and collaborate on our
            projects from anywhere. It keeps the whole team in sync without
            being intrusive."
          </p>
        </Wrap>
      </Carousel>
      <GetStarted>Get Started</GetStarted>
    </Wrapper>
  );
};
const Wrapper = tw.div`
    mb-[4rem] lg:mb-[8rem] lg:px-[10rem]
    h1 {
        text-center
    }
`;
const Carousel = styled(Slider)`
  margin-top: 30px;

  @media (max-width: 425px) {
    margin-bottom: 40px;
  }

  .slick-slide > div {
    margin-right: 2rem;
    margin-left: 2rem;
  }
  .slick-list {
    overflow: initial;
  }
  ul li button {
    &:before {
      font-size: 1rem;
      color: #ffffff;
      border: 1px solid hsl(12, 88%, 59%);
      margin-top: -2rem;
      border-radius: 999px;
      height: 100%;
      width: 100%;
    }
  }
  li.slick-active button:before {
    color: hsl(12, 88%, 59%);
  }
`;
const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 2.5rem;
  padding: 2.5rem;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    height: 74%;
    width: 100%;
    background-color: rgba(243, 244, 246);
    z-index: -1;
    bottom: 0;
    left: 0;
  }
`;
const ProfileImg = tw.img`
    h-20 w-20 mx-auto mb-4
`;
const ProfileName = tw.p`
    font-bold text-dark-blue mb-4
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
  width: 10rem;
  margin-right: auto;
  margin-left: auto;
  font-weight: 600;
`;
export default Testimonial;
