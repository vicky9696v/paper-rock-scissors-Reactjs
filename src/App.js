import {Component} from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import Popup from 'reactjs-popup'
import GameResultsView from './Component/index'

import 'reactjs-popup/dist/index.css'

import {
  MainContainer,
  SecondContainer,
  TitleHeading,
  ScoreContainer,
  ShowRulesButton,
  RulesImage,
  PopUpContainer,
  ScorePara,
} from './StyledComponents'

import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    isShow: true,
    newArray: [choicesList[0], choicesList[1]],
    text: 'YOU WON',
    score: 0,
  }

  getResult = (item1, item2) => {
    if (item1.id === 'ROCK') {
      switch (item2.id) {
        case 'PAPER':
          return 'YOU LOSE'
        case 'SCISSORS':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else if (item1.id === 'PAPER') {
      switch (item2.id) {
        case 'ROCK':
          return 'YOU WON'
        case 'SCISSORS':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (item2.id) {
        case 'ROCK':
          return 'YOU LOSE'
        case 'PAPER':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    }
  }

  restartGame = () => this.setState({isShow: true})

  checkResult = id => {
    const {score} = this.state
    const getRandomNumber =
      choicesList[Math.floor(Math.random() * choicesList.length)]
    console.log(getRandomNumber)
    const itemOne = choicesList.filter(each => each.id === id)

    const result = this.getResult(itemOne[0], getRandomNumber)
    let newScore = score

    if (result === 'YOU WON') {
      newScore = score + 1
    } else if (result === 'YOU LOSE') {
      newScore = score - 1
    } else {
      newScore = score
    }
    this.setState({
      isShow: false,
      score: newScore,
      text: result,
      newArray: [itemOne[0], getRandomNumber],
    })
  }

  render() {
    const {score, text, isShow, newArray} = this.state
    return (
      <MainContainer>
        <SecondContainer>
          <TitleHeading>
            ROCK <br />
            PAPER <br />
            SCISSORS
          </TitleHeading>

          <ScoreContainer>
            <p>Score</p>
            <ScorePara>{score}</ScorePara>
          </ScoreContainer>
        </SecondContainer>

        <GameResultsView
          choicesList={choicesList}
          text={text}
          isShow={isShow}
          newArray={newArray}
          checkResult={this.checkResult}
          restartGame={this.restartGame}
        />

        <Popup
          modal
          trigger={
            <ShowRulesButton type="button" testid="rules-button">
              RULES
            </ShowRulesButton>
          }
          position="left top"
        >
          {close => (
            <PopUpContainer>
              <AiOutlineClose size="30" type="button" onClick={() => close()} />
              <RulesImage
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </PopUpContainer>
          )}
        </Popup>
      </MainContainer>
    )
  }
}

export default App
