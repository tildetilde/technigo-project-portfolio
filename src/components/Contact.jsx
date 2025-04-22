import styled from "styled-components"

const ContactSection = styled.section`
  padding: 60px 0;
  display: flex;
  flex-direction: column;
  
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

const ProfileImageWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  margin: 0 auto 30px;
  
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
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

const ContactContent = styled.div`
  text-align: center;
  
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    text-align: left;
    flex: 1;
    margin-left: 40px;
  }
`

const ContactTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 16px;
`

const ContactName = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 16px;
`

const ContactInfo = styled.p`
  font-size: 16px;
  margin-bottom: 8px;
`

const SocialIcons = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 24px;
  justify-content: center;
  
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    justify-content: flex-start;
  }
`

const SocialIcon = styled.a`
  color: ${(props) => props.theme.colors.primary};
  font-size: 20px;
  transition: opacity 0.2s ease;
  
  &:hover {
    opacity: 0.8;
  }
`

const Contact = () => {
  return (
    <ContactSection id="contact">
      <ProfileImageWrapper>
        <ProfileImage src="/placeholder.svg?height=200&width=200" alt="Sara Svensson" />
      </ProfileImageWrapper>
      <ContactContent>
        <ContactTitle>Let's talk</ContactTitle>
        <ContactName>Sara Svensson</ContactName>
        <ContactInfo>+46(0)763 12 33 45</ContactInfo>
        <ContactInfo>sara.svensson@email.com</ContactInfo>
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
      </ContactContent>
    </ContactSection>
  )
}

export default Contact
