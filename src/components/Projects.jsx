import styled from "styled-components"
import { projects } from "../data/projects"

const ProjectsSection = styled.section`
  padding: 60px 0;
`

const SectionTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
`

const ProjectsGrid = styled.div`
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

const ProjectCard = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

const ProjectContent = styled.div`
  padding: 20px;
`

const ProjectTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`

const ProjectDescription = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.colors.lightText};
  margin-bottom: 20px;
`

const ProjectButtons = styled.div`
  display: flex;
  gap: 10px;
`

const Button = styled.a`
  display: inline-block;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  transition: all 0.2s ease;
`

const PrimaryButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  
  &:hover {
    background-color: #e05e00;
  }
`

const SecondaryButton = styled(Button)`
  border: 1px solid ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primary};
  
  &:hover {
    background-color: rgba(255, 107, 0, 0.1);
  }
`

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <SectionTitle>Featured Projects</SectionTitle>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectButtons>
                <PrimaryButton href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  Live demo
                </PrimaryButton>
                <SecondaryButton href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                  View Code
                </SecondaryButton>
              </ProjectButtons>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  )
}

export default Projects
