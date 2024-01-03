import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        Jill Agbley's Personal Developer Portfolio
      </SectionTitle>
      <SectionText>
        User-Focused Innovation: My Front-End Development, your digital
        architect. I am Proficient in HTML, CSS, JavaScript, React.js,
        typescript and Next.js. I forge user interfaces that inspire. Skilled in
        frameworks and responsive design, I ensure seamless interactions.
        Collaborating with designers, I breathe life into creative visions. My
        expertise bridge design and functionality, shaping captivating web
        experiences.{" "}
      </SectionText>
      <Button
        onClick={() =>
          window.open(
            "https://docs.google.com/spreadsheets/d/1L2JABXPIJyVm8FGA1gUAfBGD-dRZopmH4fYKLxjLUpU/edit?usp=sharing",
            "_blank"
          )
        }
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
