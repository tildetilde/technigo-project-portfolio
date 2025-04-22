import styled from "styled-components"

const TechSection = styled.section`
  padding: 60px 0;
  text-align: center;
`

const TechContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
  font-size: 18px;
  
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: 20px;
  }
`

const Tech = () => {
  return (
    <TechSection id="tech">
      <TechContent>
        HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Node.js, Mongo DB, Web Accessibility, APIs,
        mob-programming, pair-programming, GitHub.
      </TechContent>
    </TechSection>
  )
}

export default Tech
