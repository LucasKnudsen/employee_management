import './App.css';
import EmployeeList from './components/EmployeeList'

function App() {
  return (
    <>
        <section name="header">
            <h1>Employee list</h1>
        </section>
        
        <section name="main">
            <EmployeeList />
          </section>
    </>
  );
}

export default App;
