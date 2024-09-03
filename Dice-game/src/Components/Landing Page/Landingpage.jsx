import React from "react";
import styled from "styled-components"
import DiceImg from "./assets/dice.png"
import "./Landingpage.css"
const Container = styled.div`
    /* border: 1px solid; */
    display: flex;
    margin: 6rem;
`
const Landingpage = ({toggle}) =>{


    return(
        <>
            <Container>
                <div className="landingpage-img">
                    <img src={DiceImg} alt="dice-image" />
                </div>
                <div className="landingpage-content">
                    <h1 className="content-heading">DICE GAME</h1>
                    <button onClick={toggle} className="content-btn">Play Now</button>
                </div>
            </Container>
        </>
    )
}

export default Landingpage
