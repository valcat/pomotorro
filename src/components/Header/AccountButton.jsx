import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function AccountButton() {
  const userLogin = useSelector((state) => state.userLogin);

  return (
    <div className="account-button">
      {userLogin ? (
        <Link to="/myaccount">
          <button className="oval-button">
            <img className="user-icon" src="src/assets/user-icon.svg"></img>
            {userLogin}
          </button>
        </Link>
      ) : (
        <Link to="/signin">
          <button className="oval-button">
            <img className="user-icon" src="src/assets/user-icon.svg"></img>
            Sign in
          </button>
        </Link>
      )}
    </div>
  );
}
