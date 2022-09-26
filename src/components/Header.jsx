import { NavLink } from "react-router-dom";
//import { useDispatch, useSelector } from "react-redux";
//import { increaseCount, getCount } from "../features/posts/postsSlice";

export const Header = () => {
  // const dispatch = useDispatch();
  // const count = useSelector(getCount);

  return (
    <header className="Header">
      <h1>Redux Blog</h1>
      <nav>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : undefined)}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="post">Post</NavLink>
          </li>
          <li>
            <NavLink to="user">Users</NavLink>
          </li>
        </ul>
        {/* <button onClick={() => dispatch(increaseCount())}>{count}</button> */}
      </nav>
    </header>
  );
};
