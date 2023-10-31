// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {
    lastCard: false,
  }

  onChangePage = () => {
    this.setState({
      lastCard: true,
    })
  }

  render() {
    const {lastCard} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    return (
      <div className="container">
        {lastCard ? (
          <div className="last-card">
            <img src={loveEmojiUrl} alt="love emoji" className="love-img" />
            <h1 className="last-heading">Thank You</h1>
            <p className="last-para">
              We will improve your feed back to improve your customer support
              perfomance.
            </p>
          </div>
        ) : (
          <div className="card">
            <h1 className="heading">
              How satsisfied are you with your customer perfomance?
            </h1>
            <ul className="list-container">
              {emojis.map(eachItem => (
                <li className="list-card" key={eachItem.id}>
                  <button
                    className="button"
                    type="button"
                    onClick={this.onChangePage}
                  >
                    <img
                      src={eachItem.imageUrl}
                      alt={eachItem.name}
                      className="img"
                    />
                  </button>
                  <p className="emoji-name">{eachItem.name}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
