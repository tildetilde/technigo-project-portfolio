import styled from "styled-components";
import { projects } from "../data/projects";

const ProjectsSection = styled.section`
  padding: 80px 0;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: 60px;
`;

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
`;

const ProjectCard = styled.article`
  overflow: hidden;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }

  &:focus-within {
    outline: 2px solid ${(props) => props.theme.colors.primary};
    transform: translateY(-8px);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.lightText};
  margin-bottom: 20px;
  flex-grow: 1;
`;

const ProjectButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: auto;
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  text-align: center;
  transition: all 0.2s ease;

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.primary};
    outline-offset: 2px;
  }
`;

const PrimaryButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;

  &:hover {
    transform: translateY(-3px);
  }
`;

const SecondaryButton = styled(Button)`
  border: 1px solid ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primary};

  &:hover {
    transform: translateY(-3px);
  }
`;

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
                <PrimaryButton
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Live demo of ${project.title}`}
                >
                  Live demo
                </PrimaryButton>
                <SecondaryButton
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View code of ${project.title}`}
                >
                  View Code
                </SecondaryButton>
              </ProjectButtons>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects;
