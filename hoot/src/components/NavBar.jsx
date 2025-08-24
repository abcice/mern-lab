import { Link } from 'react-router-dom';
import { logOut } from '../utilities/users-service';
import "../index.css";
import styles from './NavBar.module.scss'


export default function NavBar({ routes, user, setUser }) {
  function handleLogOut() {
    logOut();
    setUser(null);
  }

  return (
    <nav className="NavBar">
      {routes.map(({ key, path }) => (
        <Link key={key} to={path}>
          {key}
        </Link>
      ))}
      {user && (
        <>
          <span>Welcome, {user.name}</span>
          <button onClick={handleLogOut}>LOG OUT</button>
        </>
      )}
    </nav>
  );
}
