import { Routes, Route } from "react-router-dom";
import { Component } from "react";
import Login from './components/auth/login.component'
import Register from "./components/auth/register.compent";
import Dashboard from './components/dashboard/dashboard.component'
import Transaction from './components/dashboard/transaction.component'
import Shiping from "./components/dashboard/shiping.component";
class App extends Component {

  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/dashboard" element={<Dashboard/>}>
            <Route path="transaction" element={<Transaction/>}/>
            <Route path="shiping" element={<Shiping/>}/>
          </Route>
        </Routes>
      </>
    );
  }
}

export default App;


function Home(){
  return(
    <>
      hello world
    </>
  )
}