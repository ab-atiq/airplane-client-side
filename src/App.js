import './App.css';
import Home from './Components/Pages/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './Components/Pages/NotFound/NotFound';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import LogIn from './Components/LogIn/LogIn';
import Registration from './Components/Registration/Registration';
import AuthProvider from './contexts/AuthProvider';
import Review from './Components/Pages/Review/Review';
import Explore from './Components/Pages/Explore/Explore';
import Purchase from './Components/Pages/Purchase/Purchase';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Dashboard from './Components/Pages/Dashboard/Dashboard';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>

          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/review'>
              <Review></Review>
            </Route>
            <PrivateRoute exact path='/purchase'>
              <Purchase></Purchase>
            </PrivateRoute>
            <Route path='/explore'>
              <Explore></Explore>
            </Route>
            <PrivateRoute path='/purchase/:purchaseId'>
              <Purchase></Purchase>
            </PrivateRoute>
            <PrivateRoute path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path='/logIn'>
              <LogIn></LogIn>
            </Route>
            <Route path='/registration'>
              <Registration></Registration>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>

          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
