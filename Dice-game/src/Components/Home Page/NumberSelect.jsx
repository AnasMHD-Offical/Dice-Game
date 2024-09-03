import React, { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 72px;
  height: 72px;
  /* border: 1px solid; */
  box-shadow: 0px 0px 2px;
  border-radius: 0.3rem;
  display: grid;
  place-items: center;
  font-size: 1.5rem;
  font-weight: 500;
  cursor: pointer;

  background-color: ${(props) => (props.Isselected ? "Black" : "White")};
  color: ${(props) => (props.Isselected ? "White" : "Black")};
`;
const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .flex {
    display: flex;
    gap: 1rem;
  }
  p {
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 0.6rem;
    margin-bottom: 0.6rem;
  }
  .error{
    color: red;
  }
`;
const NumberSelect = ({setError,error,SelectedNumber,SetSelectedNumber}) => {
  const arrNum = [1, 2, 3, 4, 5, 6];
  

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrNum.map((val, i) => (
          <Box
            Isselected={val === SelectedNumber}
            onClick={() => SetSelectedNumber(val)}
            key={i}
          >
            {val}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};
export default NumberSelect;
