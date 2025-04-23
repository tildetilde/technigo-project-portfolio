import styled from "styled-components";
import { skills } from "../data/skills";

const SkillsSection = styled.section`
  padding: 60px 0;
`;

const SectionTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
`;

const SkillsGrid = styled.div`
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

const SkillCategory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 2px solid ${(props) => props.theme.colors.primary};

  &:nth-child(4) {
    border-right: none;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.desktop}) {
    border-right: none;
    border-bottom: 2px solid ${(props) => props.theme.colors.primary};
    padding-bottom: 30px;
    margin-bottom: 30px;

    &:nth-child(4) {
      border-bottom: 2px solid ${(props) => props.theme.colors.primary};
    }

    &:last-child {
      border-bottom: none;
    }
  }
`;

const CategoryTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 10px;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 2px;
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

const SkillsList = styled.ul`
  text-align: center;
`;

const SkillItem = styled.li`
  margin-bottom: 10px;
  font-size: 16px;
`;

const Skills = () => {
  return (
    <SkillsSection id="skills">
      <SectionTitle>Skills</SectionTitle>
      <SkillsGrid>
        {Object.entries(skills).map(([category, items]) => (
          <SkillCategory key={category}>
            <CategoryTitle>{category}</CategoryTitle>
            <SkillsList>
              {items.map((skill, index) => (
                <SkillItem key={index}>{skill}</SkillItem>
              ))}
            </SkillsList>
          </SkillCategory>
        ))}
      </SkillsGrid>
    </SkillsSection>
  );
};

export default Skills;
