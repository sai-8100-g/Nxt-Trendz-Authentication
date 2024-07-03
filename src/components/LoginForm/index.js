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

  onSubmitForm = event => {
    event.preventDefault()
    const {userName, password} = this.state
    const {history} = this.props

    if (userName === '' && password === '') {
      this.setState({errorMsg: 'Please Enter Username And Password'})
    } else if (userName === '') {
      this.setState({errorMsg: 'Please Enter Username'})
    } else if (password === '') {
      this.setState({errorMsg: 'Please Enter Password'})
    } else if (userName !== 'sai-8100' || password !== '6303619882') {
      this.setState({errorMsg: "Username and Password didn't Match"})
    } else {
      this.setState({errorMsg: ''})
      history.replace('/')
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
