import React from "react";
import styled from "styled-components";

import PeriodicTable from "./components/PeriodicTable";
import QuizWindow from "./components/QuizWindow";

import { DataProvider } from "./hooks/DataContext";

const StyledHeader = styled.h3`
  margin-left: 1em;
  margin-top: 1em;
`;

const StyledContainer = styled.div`
  white-space: nowrap;
  display: flex;
`;

function App() {
  return (
    <div className="container">
      <StyledHeader>Periodic Table of Elements</StyledHeader>
      <StyledContainer>
        <DataProvider>
          <PeriodicTable />
          <QuizWindow />
        </DataProvider>
      </StyledContainer>
    </div>
  );
}

export default App;
