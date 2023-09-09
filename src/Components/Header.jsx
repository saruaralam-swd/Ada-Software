import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <header className="flex justify-between items-center bg-slate-300 p-3 border-2">
      <Link to="/" className="font-semibold">
        Ada Software
      </Link>
      <div>
        {user?.uid ? (
          <>
            <button onClick={logOut}>Sign Out</button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="hover:underline mx-3">Sign in</button>
            </Link>

            <Link to="/signUp">
              <button className="hover:underline">Sign Up</button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
