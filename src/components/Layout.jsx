import styled from "styled-components"

const StyledLayout = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 0 40px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    padding: 0 60px;
  }
`

const Layout = ({ children }) => {
  return <StyledLayout>{children}</StyledLayout>
}

export default Layout
