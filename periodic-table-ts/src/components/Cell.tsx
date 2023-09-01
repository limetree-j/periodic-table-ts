import React, { useState } from "react";
import styled from "styled-components";

import Element from "./Element";
import ElementModel from "../models/ElementModel"
import elementData from "../data/_elementData";

import { useDataContext } from '../hooks/DataContext';

const StyledCell = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  float: left;

  .fixed-value {
    font-size: large;
    font-weight: bold;
    text-align: center;
    transform: translateY(200%);
  }
`;

const Cell: React.FC<{ key: number, index: number}> = (props) => {
  const [visibility, setVisibility] = useState(false);

  const { setClickedItem } = useDataContext();

  const onClickHandler = (item: ElementModel) => (event: React.MouseEvent) => {
    setClickedItem(item);
  };

  return (
        <StyledCell onClick={onClickHandler(elementData.get(props.index)!)}>
        {elementData.get(props.index) &&
        elementData.get(props.index)?.getFamily() !== 'base' ? (
            <Element
            key={props.index}
            data={elementData.get(props.index)!}
            visibility={visibility}
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