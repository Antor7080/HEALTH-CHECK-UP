
import './App.css';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Booking from './Pages/Booking/Booking';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Signup from './Pages/Login/Signup/Signup';
import Footer from './Pages/Shared/Header/Footer';
import About from './Pages/AboutUs/About';
import Doctors from './Pages/Doctors/Doctors/Doctors';
import DoctorDetails from './Pages/DotorDetails/DoctorDetails';




function App() {
  return (
    <div className="App">


      <AuthProvider>

        <Router>
          <Header></Header>
          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <PrivateRoute path="/booking/:id">
              <Booking></Booking>

            </PrivateRoute>

            <Route path="/doctors">
              <Doctors></Doctors>
            </Route>

            <PrivateRoute path="/details/:id">
              <DoctorDetails></DoctorDetails>

            </PrivateRoute>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>

          <Footer> </Footer>

        </Router>

      </AuthProvider>
    </div>
  );
}

export default App;
