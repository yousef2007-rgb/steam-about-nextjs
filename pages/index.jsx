import React from "react";
import Intro from "../components/Intro";
import Article from "../components/Article";
import TeamMembers from "../components/TeamMembers";
import Footer from "../components/Footer";
import teamImage from "../media/team-image.jpg";
import communicationImage from "../media/communication-image.jpeg";
import boothImage from "../media/booth-image.jpg";
import f1inscoolsImage from "../media/f1inschools.png";
export default function HomePage() {
  const About = {
    title: "Team work",
    paragraph:
      "We believe that the key to a successful team is teamwork, that's why every team member help the others, even though they had nothing to do with the others’ role, and as a way of having fun while working.",
    image: teamImage,
    background: "none",
    direction: "row-reverse",
  };
  const Identity = {
    title: "team identity",
    paragraph:
      "   When it comes to team identity our team kept the red and black theme from previous years. It is the color of our car, booth and the inhibitor and the painting machine. In addition we had our logo placed on some products we gave away to share our identity.",
    image: boothImage,
    background: "#e5202b",
    direction: "row-reverse",
  };
  const communication = {
    title: "communication",
    paragraph:
      "Before we started preparing for this competition, we knew each other well, in fact we were good friends even before starting the work, so it was easy for us to work with each other, basically, we had good chemistry, we worked at school, home, and in Internet cafes, we used applications that helped us work when we were apart, applications like Discord, messenger, WhatsApp, google docs, google assistant and google drive, those gave us the ability to work from home whenever we wanted, without having to coordinate with school.",
    image: communicationImage,
    background: "none",
    direction: "row",
  };
  return (
    <div>
      <Intro content={"About us"} />
      <Article
        content={{
          title: "About the competition",
          paragraph:
            "F1 in Schools, a British competition held all over the world to discover young talented engineers, and give them the opportunity to have a bright future. Students have to design and manufacture a miniature car out of the official F1 Model Block using CAD/CNC design tools. The cars are powered by CO2 cartridges and are attached to a track by a nylon wire",
          image: f1inscoolsImage,
          background: "none",
          direction: "row",
        }}
      />
      <Article content={About} />
      <TeamMembers />
      <Article content={Identity} />
      <Article content={communication} />
      <Footer />
    </div>
  );
}
