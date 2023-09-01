import React from "react";
import styled from "styled-components";

import PeriodicTable from "./components/PeriodicTable";
import QuizWindow from "./components/QuizWindow";

import { DataProvider } from "./hooks/DataContext";

const StyledHeader = styled.h1`
  margin-left: 2.5%;
  margin-top: 2.5%;
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
