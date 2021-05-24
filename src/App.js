import Header from "./components/Header/Header";
import Stories from "./pages/Stories/Stories";
import AboutUs from "./pages/AboutUs/AboutUs";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
        <Router>
            <Header />
            <Switch>
            <Route exact path="/">
              <AboutUs />
            </Route>
            <Route path="/Stories">
              <Stories />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
            <Route path="/Login">
              <Login />
            </Route>
            <Route path="/Signup">
              <Signup />
            </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
