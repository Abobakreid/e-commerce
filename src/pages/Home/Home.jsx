import React from "react";
import img from "../../assets/5.avif";
import {
  Background,
  Carousel,
  Favorite,
  Footer,
  JoinUs,
  Navbar,
  Swipers
} from "../../Components/index";
import "./Home.scss";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Carousel />
      <Favorite />
      <Background
        img={img}
        head={"Flats That Don’t Fall Flat"}
        parag={
          "Looking for an everyday, anywhere shoe that keeps you comfy? Here it is."
        }
        btnOne={"Shop Tree Brazzers"}
        btnTwo={""}
      />
      <Swipers headTitle={"New Arrivals"} />
      <Background
        img={img}
        head={"Go Fall In"}
        parag={
          "Super soft Merino wool turns colder days into comfier ones."
        }
        btnOne={"Shop Men"}
        btnTwo={"Shop Women"}
      />
      <Swipers headTitle={"Shop The Collections"} />
      <Background
        img={img}
        head={"Can Sustainable Shoes Save The Planet?"}
        parag={
          "We think it’s a good place to start. Explore our approach to sustainable footwear, sustainable apparel and reducing our environmental impact. Check out our progress so far, and our bold list of commitments for 2025."
        }
        btnOne={"Our Sustainable Practices"}
        btnTwo={""}
      />
      <Swipers headTitle={"Stories"} />
      <JoinUs/>
      <Footer/>
    </div>
  );
};

export default Home;
