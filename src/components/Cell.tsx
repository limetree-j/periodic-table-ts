import React from "react";
import styled from "styled-components";

import Element from "./Element";
import elementData from "../data/_elementData";

const StyledCell = styled.div`
  aspect-ratio: 1/1;
  float: left;

  .fixed-value {
    font-size: 1em;
    font-weight: bold;
    text-align: center;
    padding-top: 1.5em;
  }
`;

const Cell: React.FC<{ key: number, index: number}> = (props) => {
  
  return (
        <StyledCell>
        {elementData.get(props.index) &&
        elementData.get(props.index)?.getFamily() !== 'base' ? (
            <Element
            key={props.index}
            data={elementData.get(props.index)!}
            />
        ) : (
            <div className="fixed-value">
            {elementData.get(props.index)?.getSymbol()}
            </div>
        )}
        </StyledCell>
  );
};

export default Cell;