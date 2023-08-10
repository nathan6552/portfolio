import React from "react";
import { Container } from "@material-ui/core";

const About = () => {
  return (
    <Container
      style={{
        height: "90%",
        overflow: "scroll"
      }}
    >
      <h2
        style={{
          fontFamily: "sans-serif"
        }}
      >
        About Geo News Bubbles
      </h2>
      <div
        style={{
          fontFamily: "sans-serif",
          lineHeight: "1.4em",
          paddingTop: "40px"
        }}
      >
        Geo News Bubbles is a dynamic visualization that speaks to the idea of
        nation- or region-wide filter bubbles, a phenomenon that brings the
        social media filters we are all familiar with to an entirely different
        scale.
        <br />
        <br />
        Over 2 million news articles are published daily across the globe. This
        boundless influx of constant media that now characterizes our current
        digital era makes it impossible for us to individually process the sheer
        quantity of data it entails. Therefore, we are naturally reliant on
        filters, whether they be demographic, geographic or even social, to help
        us single out the information we need. Through Geo News Bubbles, our aim
        to not only expose this effect, but also speak to the greater
        geo-political relationships that exist within.
        <br />
        <br />
        After choosing both a country and a topic, you are able to see glimpses
        into how the rest of the world talks about that country’s news. The most
        frequent keywords are scraped from local news headlines and displayed on
        the global overview while clicking on a particular country shows its
        leading articles in more detail. In particular, the overview allows us
        the opportunity to make connections between different countries – do
        certain regions focus on different keywords to share the same news? Or
        are certain perspectives entirely missing from others?
        <br />
        <br />
        The results may surprise you.
        <br />
        <br />
        Geo News Bubbles was completed in mid 2020 by Jenna Ahonen, Kiko Chen,
        Ameya Chikramane and Anna-Maija Rauramaa. Its development as a concept
        was markedly influenced by the outbreak of COVID-19 and how itself as a
        topic has resulted in vastly different media perspectives across the
        world.
      </div>
    </Container>
  );
};

export default About;
