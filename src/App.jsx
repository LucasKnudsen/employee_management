import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'

import EmployeeList from './components/EmployeeList'

class App extends Component {
  state = {
    employees: []
  }

  async componentDidMount() {
    // let response = await axios.get('https://reqres.in/api/users?per_page=5')
    let response = await (await fetch('https://reqres.in/api/users?per_page=5')).json()
    this.setState({ employees: response.data })
  }

  render() {
    return (
      <Container>
        <header name="header">
          <h1>Employee list</h1>
        </header>

        <main className="main-container" name="main">
          <EmployeeList employees={this.state.employees} />
        </main>
      </Container>
    );
  }
}

export default App;
