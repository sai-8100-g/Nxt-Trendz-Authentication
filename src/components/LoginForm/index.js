import {Component} from 'react'

import './index.css'

class Login extends Component {
  state = {
    userName: '',
    password: '',
    errorMsg: '',
  }

  imageCard = () => (
    <div className="imageCard">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
        alt="website login"
      />
    </div>
  )

  websiteLogo = () => (
    <div className="websiteLogo">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
      />
    </div>
  )

  onChangeName = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmissionSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onFailureSubmission = errorMsg => {
    this.setState({errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {userName, password} = this.state
    const userDetails = {userName, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (data.ok) {
      this.onSubmissionSuccess()
    } else {
      this.onFailureSubmission(data.error_msg)
    }
  }

  inputs = () => {
    const {errorMsg} = this.state
    return (
      <div className="inputsLabels">
        <p>
          <label htmlFor="username">USERNAME</label>
        </p>
        <input
          id="username"
          type="text"
          placeholder="USERNAME"
          onChange={this.onChangeName}
        />
        <p>
          <label htmlFor="password">PASSWORD</label>
        </p>
        <input
          id="password"
          type="password"
          placeholder="PASSWORD"
          onChange={this.onChangePassword}
        />
        <button type="submit">Login</button>
        {errorMsg && <p className="error">{errorMsg}</p>}
      </div>
    )
  }

  render() {
    return (
      <div className="loginContainer">
        {this.imageCard()}
        <form className="loginForm" onSubmit={this.onSubmitForm}>
          <div className="loginCard">
            {this.websiteLogo()}
            {this.inputs()}
          </div>
        </form>
      </div>
    )
  }
}

export default Login
