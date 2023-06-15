import React from "react";
import FeaterItem from "../../components/FeatureItem/FeaterItem";
import HeroContent from "../../components/HeroContent/HeroContent";

const Home = () => {
  const featerArray = [
    {
      imgSrc: "img/icon-chat.png",
      imgAlt: "Chat Icon",
      title: "You are our #1 priority",
      text: "Need to talk to a representative? You can get in touch through our 24/7chat or through a phone call in less than 5 minutes.",
    },
    {
      imgSrc: "img/icon-money.png",
      imgAlt: "Chat Icon",
      title: "More savings means higher rates",
      text: "The more you save with us, the higher your interest rate will be!",
    },
    {
      imgSrc: "img/icon-security.png",
      imgAlt: "Chat Icon",
      title: "Security you can trust",
      text: " We use top of the line encryption to make sure your data and money is always safe.",
    },
  ];
  return (
    <main>
      <HeroContent />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        {featerArray.map((feater, key) => {
          return <FeaterItem item={feater} key={key} />;
        })}
      </section>
    </main>
  );
};

export default Home;
