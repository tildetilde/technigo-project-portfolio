import styled from "styled-components";

const StyledLayout = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 24px;

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    padding: 0 128px;
  }
`;

const Layout = ({ children }) => {
  return <StyledLayout>{children}</StyledLayout>;
};

export default Layout;
