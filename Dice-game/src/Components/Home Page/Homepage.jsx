import React,{useState} from "react";
import Score from "./Score";
import RollDice from "./RollDice";
import NumberSelect from "./NumberSelect";
import styled from "styled-components";

const Main = styled.main`


    .top_section{
        display: flex;
        justify-content: space-between;
        align-items: end;
        margin: 3rem 2rem;
    }
    `
const Homepage = () =>{
    const [SelectedNumber, SetSelectedNumber] = useState(0);
    const [CurrentDice,setCurrentDice] = useState(1)
    const [score,Setscore] = useState(0)
    const [error,setError] = useState("")


    const GenerateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }
    
    const rollDice = () =>{
        if(!SelectedNumber){
            setError("Plese select a number")
            return
        }
        setError("")
        const randomNumber = GenerateRandomNumber(1,7)

        setCurrentDice( (prev)=> randomNumber)


        if(SelectedNumber === randomNumber){
            Setscore((prev) => prev + randomNumber)
        }else{
            Setscore((prev) => prev - 1)
        }
        SetSelectedNumber(undefined)
    }
    return(
        <main>
        <Main>
            <div className="top_section">
                <Score score={score}/>
                <NumberSelect setError={setError} error={error} SelectedNumber={SelectedNumber} SetSelectedNumber={SetSelectedNumber}/>
            </div>
            <RollDice CurrentDice={CurrentDice} rollDice={rollDice} />
        </Main>

        </main>
    )
}

export default Homepage
