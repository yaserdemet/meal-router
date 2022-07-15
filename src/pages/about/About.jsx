import { AboutContainer, InfoContainer, StyledImage } from './About.style';
// ! styled componentler.

import codingSvg from '../../assets/coding.svg';
// ? fotoyu kullanmak için component gibi import ediyoruz. bu klasör publicte olsaydı normal yol verip kullanabilirdik.

const About = () => {
  return (
    <AboutContainer wrap="wrap">
      <StyledImage src={codingSvg} />
      <div>
        <h1>
          About Software Developer <span><small><strong>Yaser DEMET</strong></small></span>
        </h1>
      </div>
      <InfoContainer>
        <h2>Hi, I'm Yaser DEMET</h2>
        <h3>I’m currently learning Full-Stack Development Languages.</h3>
        <h4>
          I've already known JS, ReactJS, HTML, CSS, SASS,SQL,
          Python, BOOTSTRAP.
        </h4>
        <h2>
          <a href="mailto:ddemety@hotmail.com">Send email</a> :
          ddemety@hotmail.com
        </h2>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;
