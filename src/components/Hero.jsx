import styled from "styled-components"

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 60px 0;
  
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 80px 0;
  }
`

const HeroContent = styled.div`
  margin-bottom: 30px;
  
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex: 1;
    margin-bottom: 0;
    margin-right: 40px;
  }
`

const HeroName = styled.p`
  font-size: 16px;
  margin-bottom: 8px;
`

const HeroTitle = styled.h1`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 16px;
  line-height: 1.2;
  
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: 48px;
  }
`

const HeroDescription = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.colors.lightText};
  margin-bottom: 24px;
  max-width: 500px;
`

const SocialIcons = styled.div`
  display: flex;
  gap: 16px;
`

const SocialIcon = styled.a`
  color: ${(props) => props.theme.colors.primary};
  font-size: 20px;
  transition: opacity 0.2s ease;
  
  &:hover {
    opacity: 0.8;
  }
`

const ProfileImageWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  margin: 0 auto;
  
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 300px;
    height: 300px;
    margin: 0;
  }
`

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.colors.primary};
`

const CircleOutline = styled.div`
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 50%;
  z-index: -1;
`

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <HeroName>I am Sara Svensson</HeroName>
        <HeroTitle>Frontend Developer</HeroTitle>
        <HeroDescription>
          Sara is an exceptional developer known for her innovative solutions and exceptional coding abilities. She
          creates user-friendly applications and solves complex issues with ease. Her drive for excellence makes her a
          valuable asset to any project and a standout in the technology field.
        </HeroDescription>
        <SocialIcons>
          <SocialIcon href="#" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </SocialIcon>
          <SocialIcon href="#" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </SocialIcon>
          <SocialIcon href="#" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </SocialIcon>
          <SocialIcon href="#" aria-label="Dribbble">
            <i className="fab fa-dribbble"></i>
          </SocialIcon>
          <SocialIcon href="#" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </SocialIcon>
        </SocialIcons>
      </HeroContent>
      <ProfileImageWrapper>
        <ProfileImage src="/placeholder.svg?height=300&width=300" alt="Sara Svensson" />
        <CircleOutline />
      </ProfileImageWrapper>
    </HeroSection>
  )
}

export default Hero
