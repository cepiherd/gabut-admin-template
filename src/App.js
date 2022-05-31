import { Routes, Route } from "react-router-dom";
import { Component } from "react";
import Login from "./components/auth/login.component";
import Register from "./components/auth/register.compent";
import Dashboard from "./components/dashboard/dashboard.component";
import Overview from "./components/dashboard/overview.component";
import Contact from "./components/dashboard/contact.component";
import Presence from "./components/dashboard/presence.component";
import Learning from "./components/dashboard/learning.component";
class App extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="overview" element={<Overview />} />
            <Route path="contact" element={<Contact />} />
            <Route path="presence" element={<Presence />} />
            <Route path="learning" element={<Learning />} />
          </Route>
        </Routes>
      </>
    );
  }
}

export default App;

function Home() {
  return <>hello world</>;
}
