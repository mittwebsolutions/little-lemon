import About from "./About/About";
import Hero from "./Hero/Hero";
import Reviews from "./Reviews/Reviews";
import Specials from "./Specials/Specials";

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <Specials></Specials>
      <Reviews></Reviews>
      <About></About>
    </>
  );
};

export default Home;