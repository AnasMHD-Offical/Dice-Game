import styled from "styled-components"

const TotalScore = styled.div`

    /* border: 1px solid; */
    box-shadow: 0px 0px 2px;
    border-radius: 0.3rem;
    width: 8em;
    height: 8em;
    max-width: 8em;
    display: flex;
    flex-direction: column;
    align-items: center;

    .score{
        font-size: 4rem;
        margin: 0px;
    }
    .score-text{
        font-size: 1rem;
        font-weight: 600;
        margin: 0;
    }
`
const Score = ({score})=>{
    return(

        <TotalScore>
            <h2 className="score">{score}</h2>
            <p className="score-text">Total Score</p>
        </TotalScore>
    )
}

export default Score