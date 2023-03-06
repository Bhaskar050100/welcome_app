// Write your code here

import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {text: 'Subscribe'}

  clickBtn = () => {
    const {text} = this.state
    if (text === 'Subscribe') {
      this.setState({text: 'Subscribed'})
    } else {
      this.setState({text: 'Subscribe'})
    }
  }

  render() {
    const {text} = this.state
    return (
      <div className="cont">
        <div className="small-cont">
          <h1 className="head">Welcome</h1>
          <p className="para">Thank you! Happy Learning</p>
          <button className="btn" type="button" onClick={this.clickBtn}>
            {text}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
