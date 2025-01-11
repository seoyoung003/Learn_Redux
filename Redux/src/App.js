import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import Counter from './components/Counter';
import Header from './components/Header'
import Auth from './components/Auth'
import UserProfile from './components/UserProfile'
import { authActions } from './store';

function App() {

  const isauth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <Fragment>
      <Header/>
      {!isauth && <Auth/> }
      {isauth && <UserProfile/> }
      <Counter/>   
    </Fragment>
    
  );
}

export default App;
