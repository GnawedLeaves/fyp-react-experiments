import styled from "styled-components";

export const HomePageContainer = styled.div``;

export const ConditionFalseComponent = styled.div`
  padding: 1rem;
  background: salmon;
`;
export const ConditionTrueComponent = styled(ConditionFalseComponent)`
  background: lime;
`;
