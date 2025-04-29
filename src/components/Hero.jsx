import styled from "styled-components";

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 16px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: center;
  overflow-x: visible;
  position: relative;
  z-index: 1;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    min-height: 80vh;
    flex-direction: row;
    padding: 100px 32px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 120px 32px;
  }
`;

const HeroContent = styled.div`
  margin-bottom: 30px;
  width: 100%;

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    flex: 1;
    margin-bottom: 0;
    max-width: 100%;
  }
`;

const HeroName = styled.p`
  font-size: clamp(1rem, 4vw, 1.5rem);
  margin-bottom: 8px;
  opacity: 0;
  animation: fadeIn 0.8s ease forwards;
  animation-delay: 0.2s;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const HeroTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: clamp(2.5rem, 8vw, 6rem);
  font-weight: 700;
  margin-bottom: 16px;
  line-height: 1.1;
  opacity: 0;
  animation: fadeIn 0.8s ease forwards;
  animation-delay: 0.4s;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: 4rem;
  }

  @media (min-width: 1440px) {
    font-size: 5rem;
  }
`;

const HeroDescription = styled.p`
  font-size: clamp(0.875rem, 3vw, 1rem);
  color: ${(props) => props.theme.colors.lightText};
  margin-bottom: 24px;
  max-width: 500px;
  opacity: 0;
  animation: fadeIn 0.8s ease forwards;
  animation-delay: 0.6s;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 16px;
  opacity: 0;
  animation: fadeIn 0.8s ease forwards;
  animation-delay: 0.8s;
`;

const SocialIcon = styled.a`
  color: ${(props) => props.theme.colors.primary};
  font-size: 20px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;

  &:hover {
    transform: translateY(-3px);
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.primary};
    outline-offset: 2px;
  }
`;

const ProfileImageWrapper = styled.div`
  position: relative;
  width: 80vw; /* Anpassar till skärmen */
  max-width: 433px;
  aspect-ratio: 1 / 1;
  flex: 0 0 auto;
  margin: 40px 0 0;
  animation: fadeIn 0.8s ease forwards;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
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
  top: -4px;
  left: -4px;
  right: -4px;
  bottom: -4px;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 50%;
  z-index: -1;
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <HeroName>This is Tilde Egebrand,</HeroName>
        <HeroTitle>Frontend Developer</HeroTitle>
        <HeroDescription>
          Tilde is not very skilled yet, but shaping fast. She's driven by
          curiosity and caffeine. She doesn’t have many answers, but she’s
          learning to ask better questions. That’s a start.
        </HeroDescription>
        <SocialIcons>
          <SocialIcon
            href="https://www.linkedin.com/in/tilde-egebrand/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </SocialIcon>
          <SocialIcon
            href="https://github.com/tildetilde"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </SocialIcon>
        </SocialIcons>
      </HeroContent>
      <ProfileImageWrapper>
        <ProfileImage
          src="/tildeprofile.jpg?height=300&width=300"
          alt="Tilde Egebrand"
        />
        <CircleOutline />
      </ProfileImageWrapper>
    </HeroSection>
  );
};

export default Hero;
