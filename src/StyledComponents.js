import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #223a5f;
  height: 100vh;
  width: 100vw;
  align-items: center;
  padding: 10px;
  justify-content: space-between;
`

export const SecondContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ffffffff;
  height: 15vh;
  width: 80%;
  margin-top: 5vh;
  border-radius: 8px;
  padding: 5%;
`

export const TitleHeading = styled.h1`
  color: #ffffffff;
  font-family: 'Bree Serif';
  font-size: 20px;
`

export const ScoreContainer = styled.div`
  height: 100px;
  width: 130px;
  background-color: #ffffffff;
  color: #223a5f;
  font-family: 'Roboto';
  align-items: center;
  border-radius: 8px;
  text-align: center;
`

export const ShowRulesButton = styled.button`
  height: 40px;
  width: 100px;
  align-self: flex-end;
  justify-self: flex-end;
`
export const RulesImage = styled.img`
  height: 500px;
  width: 600px;
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 45vh;
  width: 30vw;
  justify-content: center;
`

export const UnOrderList = styled.ul`
  height: 100%;
  width: 100%;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`

export const ListItems = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  width: 50%;
`

export const ButtonIcon = styled.button`
  height: 150px;
  width: 150px;
  border-radius: 75px;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  border: transparent;
  padding: 0px;
  align-items: center;
`

export const ImageTag = styled.img`
  height: 100%;
  width: 100%;
`

export const PopUpContainer = styled.div`
  height: 550;
  width: 650;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-self: flex-end;
`

export const PopUpImage = styled.img`
  width: 100%;
  height: 90%;
  margin-top: auto;
`
export const ScorePara = styled.p`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 28px;
`
