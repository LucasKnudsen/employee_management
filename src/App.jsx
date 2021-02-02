import React, { Component } from 'react'


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
      <div className="main-container">
        <section name="header">
          <h1>Employee list</h1>
        </section>

        <section className="main-container" name="main">
          <EmployeeList employees={this.state.employees} />

          {/* <InfoCard employees={this.state.employees} /> */}
        </section>
      </div>
    );
  }
}

export default App;
