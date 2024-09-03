import {useState} from "react"
import styled from "styled-components";
// import Dice_1 from "./Assets/Dice/dice_1.png";
// import Dice_2 from "./Assets/Dice/dice_2.png";
// import Dice_3 from "./Assets/Dice/dice_3.png";
// import Dice_4 from "./Assets/Dice/dice_4.png";
// import Dice_5 from "./Assets/Dice/dice_5.png";
// import Dice_6 from "./Assets/Dice/dice_6.png";
const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items : center;
  margin-top: 48px;

  .Dice{
    cursor: pointer;
  }
  p{
    font-size: 1.3rem;
    margin: 0;
    font-weight: 500;
  }
`
const RollDice = ({CurrentDice,rollDice}) => {

  return (
    <DiceContainer>
      <div className="Dice" onClick={rollDice}>
        <img src={`../public/Dice/dice_${CurrentDice}.png`} alt="dice 1" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RollDice;
