import React, { useState } from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import "./_app.scss";
import { Container } from "react-bootstrap";
import HomeScreen from "./screen/homeScreen/HomeScreen";
import LoginScreen from "./screen/homeScreen/loginScreen/LoginScreen";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

const Layout = ({ children }) => {
  const [sidebar, togglesidebar] = useState(false);
  const handleToggleSidebar = () => togglesidebar((value) => !value);
  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app__container">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app__main">
          {children}
        </Container>
      </div>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact="/">
          <Layout>
            <HomeScreen />
          </Layout>
        </Route>

        <Route path="/auth" exact="/auth">
          <LoginScreen />
        </Route>

        <Route path="/search" exact="/search">
          <Layout>
            <h1>Search Me</h1>
          </Layout>
        </Route>

        <Route>
          <Redirect path="/"/>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
