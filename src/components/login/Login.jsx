import React from 'react';
import './Login.css';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userName: '', password: '', formClass: 'inputFormNormal' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let form = document.getElementById('loginForm');
    alert(form);
    this.setState({
      formClass: 'inputFormError'
    });
    // form.submit();
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  resetForm() {
    this.setState({
      userName: '',
      password: '',
      formClass: 'inputFormNormal'
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} action="/dashboard" id="loginForm">
        <label>
          User:
          <input
            type="text"
            name="userName"
            placeholder="username"
            className={this.state.formClass}
            value={this.state.userName}
            onChange={this.handleChange}
          />
          <br />
          Password:
          <input
            type="password"
            name="password"
            placeholder="password"
            className={this.state.formClass}
            value={this.state.password}
            onChange={this.handleChange}
          />
          <br />
          <input type="button" value="reset form" onClick={this.resetForm} />
          <input type="submit" value="Submit" />
        </label>
        <br />
        <label>User: {this.state.userName}</label>
        <br />
        <label>Paswrod: {this.state.password}</label>
      </form>
    );
  }
}
