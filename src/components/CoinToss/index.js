// Write your code here
import {Component} from 'react'
import './index.css'

const headImgUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailImgUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResultImg: headImgUrl,
    heads: 0,
    tails: 0,
    total: 0,
  }

  onClickBtn = () => {
    const {heads, tails, total} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    let tossImg = ''
    let latesetHeadCount = heads
    let latesetTailCount = tails
    let latesetTotalCount = total

    if (tossResult === 0) {
      tossImg = headImgUrl
      latesetHeadCount += 1
    } else {
      tossImg = tailImgUrl
      latesetTailCount += 1
    }
    latesetTotalCount += 1
    this.setState({
      tossResultImg: tossImg,
      heads: latesetHeadCount,
      tails: latesetTailCount,
      total: latesetTotalCount,
    })
  }

  render() {
    const {tossResultImg, heads, tails, total} = this.state

    return (
      <div className="App-container">
        <div className="bg-container">
          <div className="coin-container">
            <h1 className="heading">Coin Toss Game</h1>
            <p className="paragraph">Heads (or) Tails</p>
            <img src={tossResultImg} className="img" alt="toss result" />
            <div>
              <button className="btn" onClick={this.onClickBtn} type="button">
                Toss Coin
              </button>
            </div>

            <div className="result-container">
              <p className="result">Total: {total}</p>
              <p className="result">Heads: {heads}</p>
              <p className="result">Tails: {tails}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
