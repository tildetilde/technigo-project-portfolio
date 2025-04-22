import styled from "styled-components"
import { journey } from "../data/journey"

const JourneySection = styled.section`
  padding: 60px 0;
`

const SectionTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
`

const JourneyGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    grid-template-columns: repeat(4, 1fr);
  }
`

const JourneyCard = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
`

const JourneyImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

const JourneyContent = styled.div`
  padding: 20px;
`

const JourneyDate = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.colors.lightText};
  margin-bottom: 10px;
`

const JourneyTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`

const JourneyDescription = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.colors.lightText};
  margin-bottom: 20px;
`

const ReadMoreLink = styled.a`
  display: inline-block;
  color: ${(props) => props.theme.colors.primary};
  font-size: 14px;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`

const Journey = () => {
  return (
    <JourneySection id="journey">
      <SectionTitle>My Journey</SectionTitle>
      <JourneyGrid>
        {journey.map((item, index) => (
          <JourneyCard key={index}>
            <JourneyImage src={item.image} alt={item.title} />
            <JourneyContent>
              <JourneyDate>{item.date}</JourneyDate>
              <JourneyTitle>{item.title}</JourneyTitle>
              <JourneyDescription>{item.description}</JourneyDescription>
              <ReadMoreLink href={item.url}>Read Article</ReadMoreLink>
            </JourneyContent>
          </JourneyCard>
        ))}
      </JourneyGrid>
    </JourneySection>
  )
}

export default Journey
