import React from "react";
import { styled } from "styled-components";

import Cell from "./Cell";

const StyledPeriodicTable = styled.div`
  margin-left: 1em;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  display: inline-grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(18, 1fr);
`;

const PeriodicTable:React.FC = (props) => {
  const elements: number[] = Array(18 * 9).fill(1);

  return (
    <StyledPeriodicTable>
      {elements.map((item: number, index: number) => (
        <Cell key={index} index={index+1} />
      ))}
    </StyledPeriodicTable>
  );
};

export default PeriodicTable;