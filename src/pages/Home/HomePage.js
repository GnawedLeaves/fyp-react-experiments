import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import {
  ConditionFalseComponent,
  ConditionTrueComponent,
  HomePageContainer,
} from "./HomePageStyles";
import BlogBox from "../../components/BlogBox/BlogBox";
import { theme } from "../../theme";

const HomePage = () => {
  const [showCondition, setShowCondition] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <HomePageContainer>Home page</HomePageContainer>
      <BlogBox title="title" />
      <div
        style={{
          margin: "5rem 0",
          border: "1px solid #333333",
          padding: "2rem",
        }}
      >
        {showCondition ? (
          <ConditionTrueComponent>Condition is true</ConditionTrueComponent>
        ) : (
          <ConditionFalseComponent>Condition is false </ConditionFalseComponent>
        )}
        <button
          onClick={() => {
            setShowCondition(!showCondition);
          }}
        >
          Click to toggle component
        </button>
      </div>
    </ThemeProvider>
  );
};

export default HomePage;
