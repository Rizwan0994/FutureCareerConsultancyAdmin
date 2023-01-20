import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import UserTable from './components/UserTable';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
function App() {
  return (
    <BrowserRouter>
    <Route path='/' exact component={LoginForm} />
    <Route path="/signup"> <SignupForm /></Route>
    <Route path="/dashboard">  <UserTable/> </Route>
  </ BrowserRouter>

  );
}

export default App;
