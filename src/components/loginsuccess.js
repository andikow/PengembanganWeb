import React from 'react'

export default class Success extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      login : [],
      email : '',
      password : ''
    }
    var id = this.props.match.params.id;
    var password = this.props.match.params.pass;
    this.getLoginData(id, password)
  }
  getLoginData(id, pass) {
      fetch('http://localhost:8000/login/:' + id + '/:' + pass)
          .then(response => response.json())
          .then(res => {
              this.setState({
                  email: res.email,
                  password: res.password
              })
          })
  }
  render() {
    return (
      <div>{this.state.password}Tes</div>
    )
  }
}
