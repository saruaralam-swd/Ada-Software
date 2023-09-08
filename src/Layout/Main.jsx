import { Link, Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <header className="flex justify-between bg-slate-300 p-3 border-2">
        <p className="font-semibold">Ada Software</p>
        <div>
          <Link to="/login">
            <button className="hover:underline">Sign in</button>
          </Link>

          <Link to="/signUp">
            <button className="hover:underline ml-3">Sign Up</button>
          </Link>
        </div>
      </header>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
