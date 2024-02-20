import React from 'react'
import styled from 'styled-components'

function Section({ title, description, leftBtntext, RighBtnText, backgroundimage }) {
  return (
    <Wrap bgImage={backgroundimage}>
        <ItemText>
          <h1>{ title }</h1>
          <p>{ description }</p>
        </ItemText>
        <Buttons>
          <ButtonGroup>
              <LeftButton>
                {leftBtntext}
              </LeftButton>
            { RighBtnText &&
                <RightButton>
                {RighBtnText}
                </RightButton>
            }
          </ButtonGroup>
          <DownArrow src='/images/down-arrow.svg' />
        </Buttons>
    </Wrap>
  )
}

export default Section 


const Wrap = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url('/images/model-s.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${props => `url("/images/${props.bgImage}")`};
  

`
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  

`

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 40px;
  @media (max-width: 800px) {
    flex-direction: column;
    
  }
`

const LeftButton = styled.div`
  background-color: rgb(23, 26, 32, 0.8);
  height: 40px;
  width: 300px;
  color: white;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  text-transform: uppercase;
  font-size: 15px;
  cursor: pointer;
  margin: 10px;
`

const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.8;
  color: black;

`

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
`

const Buttons = styled.div`
`