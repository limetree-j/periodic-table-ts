import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { useDataContext } from "../hooks/DataContext";

import ElementModel from "../models/ElementModel";

const StyledElement = styled.div<{ $family: string; $visibility: boolean }>`
  width: 4.5rem;
  aspect-ratio: 1/1;
  float: left;
  font-weight: bold;
  background-color: ${(props) => {
    if (props.$visibility) {
      if (props.$family === "non-metals") return "#abc780";
      else if (props.$family === "alcali") return "#b3242f";
      else if (props.$family === "alkaline") return "#e3a632";
      else if (props.$family === "metalloids") return "#f1ce33";
      else if (props.$family === "halogens") return "#c3c3c3";
      else if (props.$family === "noble-gases") return "#e4afc8";
      else if (props.$family === "transition") return "#a2bde1";
      else if (props.$family === "post-transition") return "#ae95c2";
      else if (props.$family === "lanthanoids") return "#5996d1";
      else if (props.$family === "actinoids") return "#92c6a9";
      else return "white";
    } else {
      return "#f3f3f3";
    }
  }};
  color: ${(props) => {
    if (props.$visibility) {
      if (
        props.$family === "alcali" ||
        props.$family === "alkaline" ||
        props.$family === "lanthanoids"
      )
        return "white";
      else return "black";
    } else {
      return "black";
    }
  }};

  &:hover {
    background-color: ${(props) => {
      if (props.$visibility) {
        return "";
      } else {
        return "black";
      }
    }};

    color: ${(props) => {
      if (props.$visibility) {
        return "";
      } else {
        return "white";
      }
    }};

    cursor: ${(props) => {
      if (props.$visibility) {
        return "";
      } else {
        return "pointer";
      }
    }};
  }

  .english-name {
    padding-top: 0.3rem;
    font-size: calc(1px + 0.05vw);
    text-align: center;
  }

  .symbol {
    visibility: ${(props) => {
      return props.$visibility ? "visible" : "hidden";
    }};
    padding-top: 0.1rem;
    font-size: calc(5px + 1vw);
    text-align: center;
  }

  .korean-name {
    padding-top: 0.3rem;
    font-size: calc(1px + 0.05vw);
    text-align: center;
  }
`;

const Element: React.FC<{ data: ElementModel }> = (props) => {
  const [visibility, setVisibility] = useState(false);
  const { setClickedItem, quizResult } = useDataContext();

  const onClickHandler = (item: ElementModel) => (event: React.MouseEvent) => {
    if (!visibility) {
      setClickedItem(item);
    }
  };

  useEffect(() => {
    if (quizResult[0] && props.data.getPosition() === quizResult[1]) {
      setVisibility(quizResult[0]);
    }
  }, [quizResult]);

  return (
    <StyledElement
      $family={props.data.getFamily()}
      $visibility={visibility}
      onClick={onClickHandler(props.data)}
    >
      <div className="english-name">{props.data.getEnglishName()}</div>
      <div className="symbol">{props.data.getSymbol()}</div>
      <div className="korean-name">{props.data.getKoreanName()}</div>
    </StyledElement>
  );
};

export default Element;
