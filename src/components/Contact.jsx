import styled from "styled-components";

const ContactSection = styled.section`
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const ProfileImageWrapper = styled.div`
  position: relative;
  width: 433px;
  height: 433px;
  margin: 0 auto 30px;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    margin: 0;
    width: 433px;
    height: 433px;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.colors.primary};
`;

const ContactContent = styled.div`
  text-align: center;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    text-align: left;
    flex: 1;
    margin-left: 80px;
  }
`;

const ContactTitle = styled.h2`
  font-size: clamp(60px, 6vw, 80px);
  font-weight: 700;
  margin-bottom: 16px;
`;

const ContactName = styled.h3`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 16px;
`;

const ContactInfo = styled.p`
  font-size: 24px;
  margin-bottom: 8px;
  transition: color 0.2s ease;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 24px;
  justify-content: center;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    justify-content: flex-start;
  }
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

const Contact = () => {
  return (
    <ContactSection id="contact">
      <ProfileImageWrapper>
        <ProfileImage
          src="/tilde2.png?height=200&width=200"
          alt="Tilde Egebrand"
        />
      </ProfileImageWrapper>
      <ContactContent>
        <ContactTitle>Let's talk</ContactTitle>
        <ContactName>Tilde Egebrand</ContactName>
        <ContactInfo>+46(0)762 81 58 26</ContactInfo>
        <ContactInfo>tilde.egebrand@gmail.com</ContactInfo>
        <SocialIcons>
          <SocialIcon href="#" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </SocialIcon>
          <SocialIcon href="#" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </SocialIcon>
        </SocialIcons>
      </ContactContent>
    </ContactSection>
  );
};

export default Contact;
