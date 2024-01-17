import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import { HomePageContainer } from "./HomePageStyles";
import BlogBox from "../../components/BlogBox/BlogBox";

const HomePage = () => {
  return (
    <ThemeProvider theme={theme}>
      <HomePageContainer>Home page</HomePageContainer>
      <BlogBox title="title" />
    </ThemeProvider>
  );
};

export default HomePage;
