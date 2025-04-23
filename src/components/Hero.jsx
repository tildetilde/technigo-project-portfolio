import styled from "styled-components";

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0;

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 80px;
    padding: 80px 0;
  }
`;

const HeroContent = styled.div`
  margin-bottom: 30px;

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    flex: 1;
    margin-bottom: 0;
    margin-right: 40px;
  }
`;

const HeroName = styled.p`
  font-size: 24px;
  margin-bottom: 8px;

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    font-size: 30px;
  }
`;

const HeroTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: 60px;
  font-weight: 700;
  margin-bottom: 16px;
  line-height: 1;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: 80px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    font-size: 100px;
  }
`;

const HeroDescription = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.colors.lightText};
  margin-bottom: 24px;
  max-width: 500px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 16px;
`;

const SocialIcon = styled.a`
  color: ${(props) => props.theme.colors.primary};
  font-size: 20px;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const ProfileImageWrapper = styled.div`
  position: relative;
  width: 433px;
  height: 433px;
  flex: 0 0 auto;
  margin: 0 auto;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    margin: 0;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
`;

const CircleOutline = styled.div`
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 50%;
  z-index: -1;
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <HeroName>This is Tilde Egebrand</HeroName>
        <HeroTitle>Frontend Developer</HeroTitle>
        <HeroDescription>
          Tilde is not skilled yet, but shaping fast — driven by curiosity and
          caffeine. She doesn’t have many answers, but she’s learning to ask
          better questions. That’s a start.
        </HeroDescription>
        <SocialIcons>
          <SocialIcon href="#" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </SocialIcon>
          <SocialIcon href="#" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </SocialIcon>
        </SocialIcons>
      </HeroContent>
      <ProfileImageWrapper>
        <ProfileImage
          src="/tildeprofile.jpg?height=300&width=300"
          alt="Sara Svensson"
        />
        <CircleOutline />
      </ProfileImageWrapper>
    </HeroSection>
  );
};

export default Hero;
