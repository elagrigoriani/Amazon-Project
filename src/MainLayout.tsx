import styled from "styled-components";

const StyledMainLayout = styled.div`
  background-color: var(--light-background-color);

  &.dark-mode {
    background-color: var(--dark-background-color);
  }
`;

function MainLayout({ children, darkMode }) {
  return (
    <StyledMainLayout className={darkMode ? "dark-mode" : ""}>
      {children}
    </StyledMainLayout>
  );
}

export default MainLayout;
