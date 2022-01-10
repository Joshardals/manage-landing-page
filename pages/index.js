import Head from "next/head";
import tw from "tailwind-styled-components";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <Wrapper>
      <Head>
        <title>Manage Landing Page</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <Header />
      <Body />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = tw.div`
  space-y-[8rem] lg:space-y-[4rem] relative
`;
