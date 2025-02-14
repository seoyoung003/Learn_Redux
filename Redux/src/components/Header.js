import { useSelector, useDispatch } from "react-redux";

import classes from "./Header.module.css";
import { authActions } from "../store/auth";

const Header = () => {
  const isauth = useSelector((state) => state.auth.isAuthenticated);

  
  const dispatch = useDispatch();

  const logoutHandler = (event) => {
  
    dispatch(authActions.logout());
 
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isauth && (
        <nav>
          <ul>
            <li>{<a href="/">My Products</a>}</li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
